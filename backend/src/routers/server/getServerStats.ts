import ServerStats from "./serverStats"

function getServerStats() {
    const stats: ServerStats = {
        memory: (process.memoryUsage().rss / 1024 / 1024).toFixed(1) + " MB",
        uptime: (process.uptime() / 3600).toFixed(1) + " h"
    }

    return stats;
}

export default getServerStats;