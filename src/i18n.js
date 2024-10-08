import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      aboutUsTitle: "About Us",
      aboutUsDescription: "Welcome to Our Flower Shop! We are dedicated to bringing you the freshest and most beautiful flowers for all occasions. Our passion for floral artistry is evident in every bouquet we create. Whether you're looking for a simple arrangement or a grand display, we are here to make your floral dreams come true.",
      ourMissionTitle: "Our Mission",
      ourMissionDescription: "At Our Flower Shop, our mission is to spread joy and love through the beauty of flowers. We believe that flowers can brighten anyone’s day and bring smiles to faces. Our aim is to provide the highest quality flowers and exceptional service to our customers.",
      whatWeOfferTitle: "What We Offer",
      offer1: "A wide variety of fresh flowers sourced daily",
      offer2: "Custom floral arrangements for all occasions, including weddings, birthdays, and funerals",
      offer3: "Delivery services available for your convenience",
      offer4: "Floral subscriptions for regular deliveries, perfect for homes and businesses",
      ourStoryTitle: "Our Story",
      ourStoryDescription: "Founded in 2020 by Jane Doe, Our Flower Shop started as a small local shop with a passion for floral design. Over the years, we have grown into a beloved part of the community, serving customers with love and dedication. Our team consists of experienced florists who are always eager to help you choose the perfect flowers.",
      visitUsTitle: "Visit Us",
      visitUsDescription: "We invite you to visit us in-store to experience the beauty of our flowers firsthand. Our friendly staff is always ready to assist you in selecting the perfect flowers for any occasion. Enjoy the vibrant atmosphere and let our flowers inspire you!",
      contactUs: "Contact Us",
    },
  },
  hi: {
    translation: {
      aboutUsTitle: "हमारे बारे में",
      aboutUsDescription: "हमारी फूलों की दुकान में आपका स्वागत है! हम आपको हर अवसर के लिए ताजे और सबसे सुंदर फूल लाने के लिए समर्पित हैं। हमारी पुष्प कला के प्रति जुनून हर गुलदस्ते में स्पष्ट है। चाहे आप एक साधारण सजावट की तलाश कर रहे हों या भव्य प्रदर्शन की, हम आपके पुष्प सपनों को सच करने के लिए यहाँ हैं।",
      ourMissionTitle: "हमारा मिशन",
      ourMissionDescription: "हमारी फूलों की दुकान में, हमारा मिशन फूलों की सुंदरता के माध्यम से खुशी और प्यार फैलाना है। हम मानते हैं कि फूल किसी का भी दिन रोशन कर सकते हैं और चेहरों पर मुस्कान ला सकते हैं। हमारा उद्देश्य ग्राहकों को उच्चतम गुणवत्ता के फूल और असाधारण सेवा प्रदान करना है।",
      whatWeOfferTitle: "हम क्या प्रदान करते हैं",
      offer1: "हर दिन प्राप्त होने वाले ताजे फूलों की एक विस्तृत विविधता",
      offer2: "शादी, जन्मदिन और अंतिम संस्कार जैसे सभी अवसरों के लिए कस्टम फूलों की सजावट",
      offer3: "आपकी सुविधा के लिए डिलीवरी सेवाएं उपलब्ध हैं",
      offer4: "नियमित डिलीवरी के लिए फूलों की सदस्यताएँ, घरों और व्यवसायों के लिए सही",
      ourStoryTitle: "हमारी कहानी",
      ourStoryDescription: "2020 में जेन डो द्वारा स्थापित, हमारी फूलों की दुकान एक छोटे स्थानीय दुकान के रूप में शुरू हुई थी जिसमें फूलों की डिज़ाइन के प्रति जुनून था। वर्षों के दौरान, हम समुदाय का एक प्रिय हिस्सा बन गए हैं, प्यार और समर्पण के साथ ग्राहकों की सेवा करते हैं। हमारी टीम में अनुभवी फूलवाले शामिल हैं जो आपको सही फूल चुनने में मदद करने के लिए हमेशा तत्पर हैं।",
      visitUsTitle: "हमसे मिलें",
      visitUsDescription: "हम आपको हमारी दुकान में आने के लिए आमंत्रित करते हैं ताकि आप हमारे फूलों की सुंदरता का अनुभव कर सकें। हमारा मित्रवत स्टाफ हमेशा आपकी मदद के लिए तैयार है ताकि आप किसी भी अवसर के लिए सही फूल चुन सकें। जीवंत माहौल का आनंद लें और हमारे फूलों से प्रेरित हों!",
      contactUs: "हमसे संपर्क करें",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
