import { Link } from "react-router-dom";

export default function JoinUs() {
  return (
    <section className="bg-primary py-[60px]">
      <div className="container mx-auto grid lg:grid-cols-5">
        <div className="col-span-3 space-y-5">
          <h2 className="text-[32px] lg:max-w-[70%] font-bold text-white">
            Hãy trải nghiệm dịch vụ tiện ích từ Thuan High Clean ngay hôm nay!
          </h2>
          <p className="text-white">
            Tham gia cùng Thuan High Clean để tận hưởng sự tiện lợi vượt trội
            trong cuộc sống hàng ngày. Với dịch vụ đặt lịch dễ dàng, nhanh chóng
            và đội ngũ chị Ong chăm chỉ, chúng tôi luôn sẵn sàng hỗ trợ bạn hoàn
            thành mọi công việc một cách hiệu quả nhất!
          </p>
          <Link to="/" className="font-bold block text-white underline">
            Trải nghiệm dịch vụ tại Thuan High Clean
          </Link>
        </div>

        <div className="col-span-2 flex justify-end mt-10 lg:mt-0">
          <img
            src="/assets/images/introduce/become.png"
            alt="Thuan High Clean"
          />
        </div>
      </div>
    </section>
  );
}
