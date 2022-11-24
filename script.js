/** @format */

// preloader

let loader = document.querySelector("#preloader");

window.addEventListener("load", () => {
	loader.style.display = "none";
})





// bact to top
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
const sending = document.querySelector("form");
const alert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
	// hilangkan tombol kirim, tampilkan tombol loading
	sending.classList.toggle("sending");
	alert.classList.toggle(".d-none");

	e.preventDefault();
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			// hilangkan tombol loading, tampilkan tombol kirim
			sending.classList.toggle("sending");

			// tampilkan alert
			alert.classList.toggle("d-none");

			// reset form
			form.reset("");

			console.log("Success!", response);
		})
		.catch((error) => console.error("Error!", error.message));
});


// aos animation
const daftarSiswa = document.querySelectorAll(".daftar-siswa");

daftarSiswa.forEach((img, i) => {
	img.dataset.aos = "fade-up";
	img.dataset.aosDelay = i * 50;
});

AOS.init({
	once: true,
});


// typed text
var typed = new Typed(".auto-input", {
	strings: ["XI TKJ 1", "SMKN1CE", "Alas Jurit"],
	typeSpeed: 100,
	backSpeed: 100,
	loop: true,
});
