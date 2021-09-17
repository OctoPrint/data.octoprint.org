import axios from "axios";

const BASE = "https://data.octoprint.org/export/";

export default async function fetchData(file) {
    const url = BASE + file;
    return await (await axios.get(url)).data;
}

export async function fetchInstanceStats(days) {
    return await fetchData(`instance_stats_${days}d.json`);
}

export async function fetchPluginStats(days) {
    return await fetchData(`plugin_stats_${days}d.json`);
}

export async function fetchPrintingStats(days) {
    return await fetchData(`printing_stats_${days}d.json`);
}

export async function fetchPythonStats(days) {
    return await fetchData(`python_stats_${days}d.json`);
}
