function goToDetail(area, id) {
    window.location.href = `detail.html?area=${area}&id=${id}`;
}

/*Nội dung từng địa điểm*/
const placeData = {
    "ha-long": [
        { id: "ti-top", title: "Đảo Ti Tốp", desc: "" },
        { id: "sung-sot", title: "Hang Sửng Sốt", desc: "" },
        { id: "thien-cung", title: "Động Thiên Cung", desc: "" }
    ],

    "nha-trang": [
        { id: "vinh-nha-trang", title: "Vịnh Nha Trang", desc: "" },
        { id: "vinh-van-phong", title: "Vịnh Vân Phong", desc: "" },
        { id: "khu-pho-tay", title: "Khu phố Tây", desc: "" }
    ],

    "phu-quoc": [
        { id: "hon-thom", title: "Hòn Thơm", desc: "" },
        { id: "vinpearl-safari", title: "Vinpearl Safari Phú Quốc ", desc: "" },
        { id: "vinwonders", title: "VinWonders Phú Quốc", desc: "" }
    ],

    "da-lat": [
        { id: "thung-lung-tinh-yeu", title: "Thung lũng Tình yêu", desc: "" },
        { id: "fresh-garden", title: "Fresh Garden - Làng Hoa Vạn Thành Đà Lạt", desc: "" },
        { id: "vuon-anh-sang", title: "Vườn ánh sáng Lumiere", desc: "" }
    ]
};

function showBottomPlaces(area) {
    const container = document.getElementById("bottom-place-container");
    const list = document.getElementById("bottom-place-list");

    // Xóa nội dung cũ
    list.innerHTML = "";

    // Thêm 3 địa điểm
    placeData[area].forEach(p => {
        list.innerHTML += `
            <div class="place-card" onclick="goToDetail('${area}', '${p.id}')">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
            </div>
        `;
    });

    // Hiện vùng dưới
    container.style.display = "flex";
}

// Click ra ngoài → ẩn vùng dưới
document.addEventListener("click", function(e) {
    const isMainNode = e.target.closest(".MainNode");
    const isBottom = e.target.closest("#bottom-place-container");

    if (!isMainNode && !isBottom) {
        document.getElementById("bottom-place-container").style.display = "none";
    }
});