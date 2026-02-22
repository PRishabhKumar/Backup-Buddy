import psutil as ps
import logging 

# set up logger

logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("logs.txt"),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

def get_drives():
    logger.info("Started scanning for drives...")
    drives = []
    for partition in ps.disk_partitions():
        # check for the 'removable' flag or some specific mount patterns
        is_removable = 'removable' in partition.opts
        is_media_path = "/media/" in partition.mountpoint or '/Volumes/' in partition.mountpoint
        is_usb = 'cdrom' not in partition.mountpoint and partition.mountpoint not in ('D:\\', 'C:\\', '/')
        if is_removable or is_media_path or is_usb:
            try:
                usage = ps.disk_usage(partition.mountpoint)
                drives.append({
                    "device" : partition.device,
                    "mountpoint": partition.mountpoint,
                    "total": usage.total,
                    "used": usage.used,
                    "free": usage.free,
                    "percentage": usage.percent
                })
            except PermissionError:
                # skipping the drives that are locked by the System
                continue
    return drives