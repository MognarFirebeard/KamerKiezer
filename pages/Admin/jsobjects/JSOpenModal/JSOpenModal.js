export default {
	onPageLoad: async () => {
		showModal("mdlToegangAdmin");
	},

	controleerWachtwoord: () => {
		if (inp_AdminWachtwoord.text === "KamerAdmin1070&") {
			closeModal("mdlToegangAdmin");
		} else {
			showAlert("Fout wachtwoord, probeer opnieuw!", "error");
		}
	}
}