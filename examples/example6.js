#!/usr/bin/env node
const vmwClient = require('../lib/vmw-sdk');
const vmw = new vmwClient();

const params = require('./params.json');
const username = params.username;
const password = params.password;

(async() => {
	try {
		// login
		await vmw.login({
			username: username,
			password: password
		});

		// get and display latest [ vmware_nsx_t_data_center ] information
		let response = await vmw.getDLGDetails({
			downloadGroup: 'NSX-T-30110',
			productId: 982
		});

		// print to console
		console.log(JSON.stringify(response, null, "\t"));
	} catch(error) {
		console.log(error.message);
	}
})();