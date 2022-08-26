const endpoint = "https://babushka-dd8a.restdb.io/rest/menu";
const mereinfo = {
    headers: {
        "x-apikey": "600ec2fb1346a1524ff12de4",
    },
};
async function hentData(){
    const response = await fetch(endpoint,mereinfo);
    const personer = await response.json();
    vis(personer);
}
