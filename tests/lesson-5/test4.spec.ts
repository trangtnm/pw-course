import { test } from "@playwright/test";

test("Test 04", async ({ page }) => {
  await test.step("Navigate to Home Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click to open Personal Notes", async () => {
    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
  });

  await test.step("Add 10 note from vnexpress", async () => {
    const myNotes = [
      {
        title:
          "Google hợp tác với Việt Nam về phát triển AI và công nghệ lượng tử",
        description:
          "Bộ Khoa học và Công nghệ đề nghị Google hỗ trợ xây dựng phòng thí nghiệm AI và công nghệ lượng tử, đồng thời tư vấn chiến lược phát triển lĩnh vực này.",
      },
      {
        title:
          "Viện Công nghệ số quốc gia hướng đến tiêu chuẩn AI khu vực Đông Nam Á",
        description:
          "Viện Công nghệ số và Chuyển đổi số quốc gia đặt mục tiêu dẫn đầu nghiên cứu chính sách và tiêu chuẩn công nghệ AI trong khu vực.",
      },
      {
        title: "Việt Nam có thể tiếp cận 5G tới 26% dân số hiện nay",
        description:
          "Bộ Khoa học và Công nghệ thúc đẩy phát triển mạng 5G; hiện khoảng 26% dân số đã tiếp cận, với mục tiêu 90% vào cuối năm.",
      },
      {
        title: "Thuốc phóng xạ F‑18 FDG do Việt Nam sản xuất phục vụ ung thư",
        description:
          "Được sử dụng để ghi hình PET/CT, giúp chẩn đoán và điều trị sớm bệnh ung thư tại các bệnh viện trong nước.",
      },
      {
        title: "Việt Nam – Lào ký kết hợp tác về phát triển khoa học công nghệ",
        description:
          "Quỹ NAFOSTED Việt Nam và FOSTED Lào kí biên bản ghi nhớ hợp tác khoa học, công nghệ và đổi mới sáng tạo.",
      },
      {
        title: "Ra mắt Cổng thông tin Make in Vietnam cho sản phẩm công nghệ",
        description:
          "Bộ Khoa học và Công nghệ công bố nền tảng để đăng ký, tiếp nhận và công bố các sản phẩm khoa học – công nghệ trong nước.",
      },
      {
        title: "Robots mềm phục vụ con người đang được nghiên cứu tại Việt Nam",
        description:
          "PGS trẻ người Việt khảo sát và phát triển robot mềm làm việc nhẹ như hái hoa quả, chăm sóc người già hoặc phục vụ trong y tế.",
      },
      {
        title: "Công nghệ sạc không dây mặt đường cho xe buýt ở Israel",
        description:
          "Một startup Israel đang phát triển công nghệ biến mặt đường thành nguồn sạc không dây dành cho xe buýt công cộng.",
      },
      {
        title:
          "Chip AI Hanguang 800 xử lý 78.500 hình/giây do Trung Quốc phát triển",
        description:
          "Siêu chip này giúp tăng hiệu suất tìm kiếm sản phẩm trên nền tảng thương mại điện tử như Taobao.",
      },
      {
        title:
          "Thiết bị tạo sóng terahertz nhanh gấp 10 lần bóng bán dẫn hiện nay",
        description:
          "Thiết bị do Viện Công nghệ Liên bang Lausanne (Thụy Sĩ) phát triển, cho hiệu năng vượt trội trong truyền dữ liệu tần số cao.",
      },
    ];

    for (let note of myNotes) {
      await page.locator('//input[@id="note-title"]').fill(note.title);
      await page
        .locator('//textarea[@id="note-content"]')
        .fill(note.description);
      await page.locator('//button[@id="add-note"]').click();
    }
    const randomSearchTitle =
      myNotes[Math.floor(Math.random() * myNotes.length)].title;
    await page.locator('//input[@id="search"]').fill(randomSearchTitle);
  });
});
