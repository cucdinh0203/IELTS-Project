const translations = {
    "bronze-age": {
        en: "the time in the past when tools and weapons were made of bronze",
        vi: "Thời kì đồ đồng"
    },
    "preserve": {
        en: "To keep something as it is, especially in order to prevent it from decaying or being damaged or destroyed",
        vi: "Bảo quản"
    },
    "by chance": {
        en: "If something happens by chance, it happens without being planned or intended, or without any known cause",
        vi: "Tình cờ"
    },
    "profound": {
        en: "felt or experienced very strongly or in an extreme way",
        vi: "Sâu sắc"
    },
    "ancient": {
        en: "of or from a long time ago, having lasted for a very long time",
        vi: "Cổ đại"
    },
    "alongside": {
        en: "next to, or together with",
        vi: "Cùng với"
    },
    "shaft": {
        en: "a long, either vertical or sloping, passage through a building or through the ground",
        vi: "Trục"
    },
    "reveal": {
        en: "to make known or show something that is surprising or that was previously secret",
        vi: "Tiết lộ"
    },
    "waterlogged": {
        en: "(of land) full of water and almost covered by a layer of it",
        vi: "Ngập nước"
    },
    "overlying": {
        en: "to be on top of something",
        vi: "Chồng lên nhau"
    },
    "prehistoric": {
        en: "describing the period before there were written records",
        vi: "Thời tiền sử"
    },
    "sediment": {
        en: "a soft substance that is like a wet powder and consists of very small pieces of a solid material that have fallen to the bottom of a liquid",
        vi: "Trầm tích"
    },
    "buried": {
        en: "to put something in a place where it is difficult or impossible to find or see",
        vi: "Chôn cất"
    },
    "timber": {
        en: "trees that are grown so that the wood from them can be used for building",
        vi: "Gỗ"
    },
    "recovered": {
        en: "to become completely well again after an illness or injury",
        vi: "Phục hồi"
    },
    "beyond": {
        en: "farther away in the distance (than something)",
        vi: "Vượt ra"
    },
    "lay": {
        en: "to put something in especially a flat or horizontal position, usually carefully or for a particular purpose",
        vi: "Đặt nằm"
    },
    "excavation": {
        en: "the act of removing earth that is covering very old objects buried in the ground in order to discover things about the past",
        vi: "Khai quật"
    },
    "consisted": {
        en: "to be made of or formed from something",
        vi: "Hình thành (tạo ra)"
    },
    "intricately": {
        en: "in a way that has a lot of small parts that are arranged in a complicated or delicate way",
        vi: "Phức tạp"
    },
    "carved": {
        en: "to make something by cutting into a hard material, especially wood or stone",
        vi: "Điêu khắc, chạm khắc"
    },
    "oak planks": {
        en: "a long, narrow, flat piece of wood or similar material, of the type used for making floors by oak",
        vi: "Ván gỗ sồi"
    },
    "seam, stitched": {
        en: "a line where two things join, especially a line of sewing joining two pieces of cloth or leather",
        vi: "May, nối lại"
    },
    "complicated": {
        en: "involving a lot of different parts, in a way that is difficult to understand",
        vi: "Phức tạp"
    },
    "wedges": {
        en: "a piece of something, especially food, in the shape of a triangle",
        vi: "Nêm"
    },
    "watertight": {
        en: "having no openings to allow water to get in",
        vi: "Kín nước"
    },
    "yew stitches": {
        en: "a piece of thread sewn in cloth, or the single movement of a needle and thread into and out of the cloth that produces this",
        vi: "Thùy tùng khâu"
    },
    "antiquity": {
        en: "the distant past (= a long time ago), especially before the sixth century",
        vi: "Thời cổ đại"
    },
    "deduced": {
        en: "to reach an answer or a decision by thinking carefully about the known facts",
        vi: "Suy ra"
    },
    "evidence": {
        en: "facts, information, documents, etc. that give reason to believe that something is true",
        vi: "Chứng cứ"
    },
    "wreck": {
        en: "a vehicle or ship that has been destroyed or badly damaged",
        vi: "Xác đắm tàu"
    },
    "deliberately": {
        en: "intentionally",
        vi: "Cố ý"
    },
    "discard": {
        en: "to throw something away or get rid of it because you no longer want or need it",
        vi: "Loại bỏ"
    },
    "hindsight": {
        en: "the ability to understand an event or situation only after it has happened",
        vi: "Nhìn lại"
    },
    "mainstream": {
        en: "considered normal, and having or using ideas, beliefs, etc. that are accepted by most people",
        vi: "Dòng chính"
    },
    "narrower": {
        en: "having a small distance from one side to the other, especially in comparison with the length",
        vi: "Hẹp hơn"
    },
    "perspective": {
        en: "a particular way of considering something",
        vi: "Quan điểm"
    },
    "broad": {
        en: "very wide",
        vi: "Rộng"
    },
    "anniversary": {
        en: "the day on which an important event happened in a previous year",
        vi: "Dịp kỉ niệm"
    },
    "conference": {
        en: "an event, sometimes lasting a few days, at which there is a group of talks on a particular subject, or a meeting in which especially business matters are discussed formally",
        vi: "Hội nghị"
    },
    "apparent": {
        en: "able to be seen or understood",
        vi: "Có thể nhìn thấy hoặc hiểu được"
    },
    "religious": {
        en: "relating to religion",
        vi: "Liên quan đến tôn giáo"
    },
    "perceptions": {
        en: "a belief or opinion, often held by many people and based on how things seem",
        vi: "Nhận thức"
    },
    "societies": {
        en: "a large group of people who live together in an organized way, making decisions about how to do things and sharing the work that needs to be done",
        vi: "Xã hội"
    },
    "overseas": {
        en: "in, from, or to other countries",
        vi: "Nước ngoài"
    },
    "debate": {
        en: "serious discussion of a subject in which many people take part",
        vi: "Tranh luận"
    }
};
const translateBox = document.createElement("div");
translateBox.id = "translateBox";
translateBox.style.position = "absolute";
translateBox.style.background = "#fff";
translateBox.style.border = "1px solid #333";
translateBox.style.padding = "10px";
translateBox.style.display = "none";
translateBox.style.zIndex = "1000";
translateBox.style.fontSize = "14px";
translateBox.style.borderRadius = "6px";
document.body.appendChild(translateBox);

// Attach click event to words
document.querySelectorAll("strong").forEach(word => {
    word.style.cursor = "pointer";
    word.addEventListener("click", (event) => {
        const text = event.target.textContent.trim().toUpperCase();
        const meaning = wordMeanings[text];

        if (meaning) {
            translateBox.innerHTML = `
                <strong>${text}</strong><br>
                <em>EN:</em> ${meaning.en}<br>
                <em>VN:</em> ${meaning.vn}
            `;
            translateBox.style.display = "block";
            translateBox.style.left = event.pageX + "px";
            translateBox.style.top = event.pageY + "px";
        }
    });
});

// Hide box on click outside
document.addEventListener("click", (e) => {
    if (!e.target.closest("strong") && !e.target.closest("#translateBox")) {
        translateBox.style.display = "none";
    }
});
