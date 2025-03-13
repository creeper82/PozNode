import Announcement from "../types/Announcement";
import AnnouncementCard from "./AnnouncementCard";
import Divider from "./Divider";

export default function Announcements({ announcements }: { announcements: Announcement[]; }) {
    return (
        <div>
            {announcements.map(announcement =>
                <div key={announcement.content}>
                    <AnnouncementCard announcement={announcement} />
                    <Divider />
                </div>
            )}
        </div>
    );
}