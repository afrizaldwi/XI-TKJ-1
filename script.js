/** @format */

function scrollToTop() {
	window.scrollTo(0, 0);
}

const toTop = document.querySelector(".scrollTop");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
});

// contact form
const scriptURL =
	"https://script.google.com/macros/s/AKfycbwc2fCbGNcL8WC3PRNrGD03bbF_KJvdfTJruj4QhVNovmsNL6JNKEYqDCj3SEuEels3/exec";
const form = document.forms["contact-form-xi-tkj-1"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const alert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
	// ketika tombol kirim di klik
	btnLoading.classList.toggle("d-none");
	btnKirim.classList.toggle("d-none");

	e.preventDefault();
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			btnLoading.classList.toggle("d-none");
			btnKirim.classList.toggle("d-none");
      alert.classList.toggle("d-none");

      form.reset();
			console.log("Success!", response);
		})
		.catch((error) => console.error("Error!", error.message));
});
