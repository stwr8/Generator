const FormContact = () => {
    return (
        <section className="bg-contact-pattern bg-no-repeat bg-cover bg-fixed pt-[90px] sm:pt-[120px] pb-[90px] mt-[30px] sm:mt-[57px]">
            <div className="container flex items-center justify-between">
                <p></p>
                <div
                    data-aos="fade-left"
                    data-aos-duration="600"
                    className="max-w-[590px] w-full py-[30px] px-[45px] bg-[#4762FF] rounded-[10px]"
                >
                    <h3 className="font-normal text-[30px] text-white text-center leading-9">
                        Хотите получить бесплатную консультацию?
                    </h3>
                    <form
                        autoComplete="off"
                        className="space-y-[20px] mt-[30px]"
                    >
                        <input
                            type="text"
                            placeholder="Номер телефона"
                            className="w-full h-[45px] sm:h-[54px] font-normal border-[1.5px] border-white bg-input-bg-contact rounded-lg outline-none text-[16px] text-white placeholder-white px-[25px]"
                        />
                        <button
                            className="w-full h-[45px] sm:h-[54px] font-bold text-[18px] text-[#4762FF] text-center bg-[#fff] rounded-lg"
                            type="submit"
                        >
                            Отправить
                        </button>
                    </form>
                    <div className="my-5">
                        <p className="font-normal text-[26px] text-white text-center">
                            или позвоните на номер
                        </p>
                        <a
                            href="tel:+998980013666"
                            className="block font-normal text-[30px] text-white text-center leading-8"
                        >
                            {" "}
                            +998 98 001 3 666
                        </a>
                    </div>
                    <p className="max-w-[312px] w-full mx-auto text-white text-[16px] opacity-80 text-center">
                        После получения заявки наш специалист свяжется с вами
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FormContact;
