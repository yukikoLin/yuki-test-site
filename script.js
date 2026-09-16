const messages = [
  "今日能量：被溫柔偏愛 ♡",
  "今日能量：好運正在偷偷靠近 ✦",
  "今日能量：不用完美也很可愛",
  "今日能量：霸總降臨機率 +10%",
  "今日能量：適合喝一杯草莓牛奶"
];

const button = document.querySelector("#energyButton");
const bunny = document.querySelector("#bunny");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  const next = messages[Math.floor(Math.random() * messages.length)];
  message.textContent = next;
  bunny.classList.remove("happy");
  void bunny.offsetWidth;
  bunny.classList.add("happy");
});
