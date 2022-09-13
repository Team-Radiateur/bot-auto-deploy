const lmadactyl = require("lmadactyl");
const dotenv = require("dotenv");

dotenv.config();

const env = {
	pterodactyl: {
		url: process.env.PTERODACTYL_API_URL || "",
		apiKey: process.env.PTERODACTYL_API_KEY || "",
		serverId: process.env.PTERODACTYL_SERVER_ID || ""
	}
};

(async () => {
	await lmadactyl.client.utils.sendSignal(
		env.pterodactyl.url,
		env.pterodactyl.apiKey,
		env.pterodactyl.serverId,
		"restart"
	);
})();
