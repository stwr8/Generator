const FormContact = () => {
    return (
        <section className="bg-contact-pattern bg-no-repeat bg-cover pt-[90px] sm:pt-[120px] pb-[90px] mt-[30px] sm:mt-[57px]">
            <div className="container flex items-center justify-between">
                <p></p>
                <div className="max-w-[607px] w-full bg-white rounded-[15px] px-[20px] sm:px-[35px] pt-[10px] sm:pt-5 pb-5 sm:pb-10">
                    <h2 className="font-bold text-[24px] sm:text-[40px] text-[#333] leading-[30px] sm:leading-[45px] text-center">
                        Получите консультацию бесплатно
                    </h2>
                    <p className="font-normal text-[16px] sm:text-[18px] text-[#333] opacity-80 leading-6 sm:leading-7 mt-4 text-center">
                        Наши специалисты перезвонят вам и дадут подробную
                        информацию
                    </p>
                    <form
                        autoComplete="off"
                        className="space-y-[23px] mt-[25px]"
                    >
                        <input
                            type="text"
                            placeholder="Имя"
                            className="w-full h-[45px] sm:h-[54px] font-normal border-[1.5px] border-white focus:border-[#4762FF] bg-input-bg rounded-lg outline-none text-[16px] text-[#979797] px-[25px]"
                        />
                        <input
                            type="text"
                            placeholder="Номер телефона"
                            className="w-full h-[45px] sm:h-[54px] font-normal border-[1.5px] border-white focus:border-[#4762FF] bg-input-bg rounded-lg outline-none text-[16px] text-[#979797] px-[25px]"
                        />
                        <button
                            className="w-full h-[45px] sm:h-[64px] font-bold text-[18px] text-white text-center bg-[#4762FF] rounded-lg"
                            type="submit"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FormContact;
