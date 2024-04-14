import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";

const Footer = async({lang}) => { 
    const dict = await getDictionary(lang);
    return (
        <div className="py-6 md:py-8 mt-8">
            <div className="container mx-auto">
                <p className="text-center text-sm text-[#EEEEEE]/60">
                   {dict.footer}
                </p>
            </div>
        </div>
    );
};

export default Footer;