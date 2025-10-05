let items = [
    {
        icon: "scr/icon/Calender.png",
        title: "Manage all your <br> bookings in one place.",
        desc: "With the option to view and manage your <br> staffs bookings too!",
        img: "scr/img/1.png",
        label: "Manage Bookings"
    },
    {
        icon: "scr/icon/Rows.png",
        title: "Organise all of your <br> services easily.",
        desc: "Make adjustments to your services anytime and <br> allow your customers to make bookings 24/7.",
        img: "scr/img/2.png",
        label: "Organise Services"
    },
    {
        icon: "scr/icon/Chart.png",
        title: "Get up to date analytic <br> on your business.",
        desc: "See upcoming bookings, cashflow <br> summaries + more...",
        img: "scr/img/3.png",
        label: "Business Analytics"
    },
    {
        icon: "scr/icon/Wallet.png",
        title: "Easily withdraw your <br> balance income",
        desc: "See upcoming bookings, cashflow <br> summaries + more...",
        img: "scr/img/4.png",
        label: "Receive Payments"
    }
];        

let index = 0;

let contentIcon = document.getElementById("content-icon");
let contentLabel = document.getElementById("content-label");
let contentImg = document.getElementById("content-img");
let contentTitle = document.getElementById("content-title");
let contentDesc = document.getElementById("content-desc");

let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let buttons = document.querySelectorAll(".button-group .btn");

function updateContent(i) {
    index = i;
    let item = items[index];

    contentImg.src = item.img;
    contentTitle.innerHTML = item.title;
    contentDesc.innerHTML = item.desc;

    if (contentLabel) contentLabel.innerHTML = item.label;
    if (contentIcon) {
        contentIcon.src = item.icon;
        contentIcon.classList.add("active");
    } else {
        contentIcon.classList.remove("active");
    }

    buttons.forEach(b => b.classList.remove("active"));
    if (buttons[index]) buttons[index].classList.add("active");
}


if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
        index = (index - 1 + items.length) % items.length;
        updateContent(index);
    });
    nextBtn.addEventListener("click", () => {
        index = (index + 1) % items.length;
        updateContent(index);
    });
}

buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => updateContent(i));
});

updateContent(0);

document.querySelectorAll('.btn-show').forEach((btn) => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.question-card');
        const answer = card.querySelector('.answer');
        const icon = btn.querySelector('.icon-toggle');

        card.classList.toggle('active');

        if (card.classList.contains('active')) {
            icon.src = 'scr/icon/min.png'; 
        } else {
            icon.src = 'scr/icon/plus.png'; 
        }
    });
});