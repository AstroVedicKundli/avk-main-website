"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface ChalisaDetail {
  title: string;
  bannerImage: string;
  description: string;
  dohaTitle: string;
  dohaLyrics: { text: string; meaning?: string }[];
  chaupaiTitle: string;
  chaupaiLyrics: { text: string; meaning?: string }[];
  chopaaiTitle?: string;
  chopaaiLyrics?: { text: string; meaning?: string }[];
  howToPerform?: string[];
}

const chalisaData: Record<string, ChalisaDetail> = {
  "hanuman-chalisa": {
    title: "Hanuman Chalisa",
    bannerImage: "/puja/chalisa/slug/Hanuman_Chalisa.webp",
    description:
      "Read Hanuman Chalisa in English with Doha & Chaupai. Discover its meaning & power. Boost positivity, read now for peace and blessings.",
    dohaTitle: "Hanuman Chalisa Doha in English",
    dohaLyrics: [
      {
        text: "Shree Guru Charan Saroj Raj, Nij Man Mukar Sudhari, Barnau Raghuvar Bimal Jasu, Jo dayaku Phal Chari",
        meaning: "With the dust of Guru's Lotus feet, I clean the mirror of my mind and then narrate the sacred glory of Sri Ram Chandra, The Supreme among the Raghu dynasty. The giver of the four attainments of life."
      },
      {
        text: "Budhi heen Tanu Janike, Sumirow, Pavan Kumar, Bal Buddhi Vidya Dehu Mohi, Harahu Kalesh Bikaar",
        meaning: "Knowing myself to be ignorant, I urge you, O Hanuman, The son of Pavan! O Lord! kindly Bestow on me strength, wisdom and knowledge, removing all my miseries and blemishes."
      },
    ],
    chaupaiTitle: "Hanuman Chalisa Chaupai in English",
    chaupaiLyrics: [
      {
        text: "Jai Hanuman Gyan Guna Sagar, Jai Kipis Tihun Lok Ujgaar",
        meaning: "Victory of Thee, O Hanuman, Ocean of wisdom and virtue, victory to the Lord of monkeys who is well known in all the three worlds"
      },
      {
        text: "Ramdoot Atulit Bal Dhamaa, Anjani Putra Pavansut naamaa.",
        meaning: "You, the Divine messenger of Ram and repository of immeasurable strength, are also known as Anjaniputra and known as the son of the wind - Pavanputra."
      },
      {
        text: "Mahebeer Bikram Bajrangi, Kumati Nivaar Sumati Ke Sangi.",
        meaning: "Oh Hanumanji! You are valiant and brave, with a body like lightning. You are the dispeller of darkness of evil thoughts and companion of good sense and wisdom."
      },
      {
        text: "Kanchan Baran Biraaj Subesaa, Kanan kundal kunchit kesa",
        meaning: "Shri Hanumanji's physique is golden coloured. His dress is pretty, wearing 'Kundals' ear-rings and his hairs are long and curly."
      },
      {
        text: "Hath Bajra Aur Dhvaja Birjai, Kandhe Moonj Janeu saage.",
        meaning: "Shri Hanumanji is holding in one hand a lightning bolt and in the other a banner with sacred thread across his shoulder."
      },
      {
        text: "Shankar Suvna Kesari Nandan, Tej Pratap Maha Jag Vandan",
        meaning: "Oh Hanumanji! You are the emanation of 'SHIVA' and you delight Shri Keshri. Being ever effulgent, you hold vast sway over the universe. The entire world propitiates. You are adorable of all."
      },
      {
        text: "Vidyavaan Guni Ati Chatur, Ram Kaj Karibe Ko Atur",
        meaning: "Oh! Shri Hanumanji! You are the repository of learning, virtuous, very wise and highly keen to do the work of Shri Ram"
      },
      {
        text: "Prabhu Charittra Sunibe Ko Rasiya, Ram Lakhan Sita man basyia.",
        meaning: "You are intensely greedy for listening to the narration of Lord Ram's life story and revel on its enjoyment. You ever dwell in the hearts of Shri Ram-Sita and Shri Lakshman."
      },
      {
        text: "Sukshma roop Dhari Siyahi Dikhwana, Bikat roop Dhari Lank Jarawa",
        meaning: "You appeared before Sita in a diminutive form and spoke to her, while you assumed an awesome form and struck terror by setting Lanka on fire."
      },
      {
        text: "Bhim roop Dhari Asur Sanhare, Ramchandra Ke kaaj Savare.",
        meaning: "He, with his terrible form, killed demons in Lanka and performed all acts of Shri Ram."
      },
      {
        text: "Laye Sajivan Lakhan Jiyaye, Shri Raghubir harashi ur laye.",
        meaning: "When Hanumanji made Lakshman alive after bringing 'Sanjivani herb' Shri Ram took him in his deep embrace, his heart full of joy."
      },
      {
        text: "Raghupati Kinhi Bahut Badaai, Tum Mama Priya Bharat Sam Bahi.",
        meaning: "Shri Ram lustily extolled Hanumanji's excellence and remarked, 'you are as dear to me as my own brother Bharat'"
      },
      {
        text: "Sahastra Badan Tumharo Jas Gaave, Asa kahi Shripati Kanth Laagave.",
        meaning: "Shri Ram embraced Hanumanji saying: 'Let the thousand-tongued Sheshnag sing your glories'"
      },
      {
        text: "Sankadik Brahmadi Muneesa, Narad Sarad Sahit Aheesa",
        meaning: "Sanak and the sages, saints. Lord Brahma, the great hermits Narad and Goddess Saraswati along with Sheshnag the cosmic serpent, fail to sing the glories of Hanumanji exactly"
      },
      {
        text: "Jam Kuber Digpal Jahan Te, Kabi Kabid Kahin Sake Kahan Te",
        meaning: "What to talk of denizens of the earth like poets and scholars etc even Gods like Yamraj, Kuber, and Digpal fail to narrate Hanuman's greatness in toto."
      },
      {
        text: "Tum Upkar Sugrivahi Keenha, Ram Miali Rajpad Deenha",
        meaning: "Hanumanji! You rendered a great service for Sugriva, It were you who united him with SHRI RAM and installed him on the Royal Throne."
      },
      {
        text: "Tumharo Mantro Bibhishan Maana, Lankeshwar Bhaye Sab Jag Jaana.",
        meaning: "By heeding your advice, Vibhushan became Lord of Lanka, which is known all over the universe."
      },
      {
        text: "Juug Sahastra Jojan Par Bhaanu, Leelyo Taahi Madhur Phal Jaanu",
        meaning: "Hanumanji gulped the SUN at distance of sixteen thousand miles considering it to be a sweet fruit."
      },
      {
        text: "Prabhu Mudrika Meli Mukha Maaheen, Jaladhi Langhi Gaye Acharaj Naheen.",
        meaning: "Carrying the Lord's ring in his mouth, he went across the ocean. There is no wonder in that."
      },
      {
        text: "Durgam Kaaj Jagat Ke Jeete, Sugam Anugrah Tumhre Te Te.",
        meaning: "Oh Hanumanji! all the difficult tasks in the world are rendered easiest by your grace."
      },
      {
        text: "Ram Duware Tum Rakhavare, Hot Na Aagya Bin Paisare.",
        meaning: "Oh Hanumanji! You are the sentinel at the door of Ram's mercy mansion or His divine abode. No one may enter without your permission."
      },
      {
        text: "Sab Sukh Lahen Tumhari Sarna, Tum Rakshak Kaahu Ko Darnaa.",
        meaning: "By your grace one can enjoy all happiness and one need not have any fear under your protection."
      },
      {
        text: "Aapan Tej Samharo Aapei, Tanau Lok Hank Te Kanpei",
        meaning: "When you roar all the three worlds tremble and only you can control your might."
      },
      {
        text: "Bhoot Pisaach Nikat Nahi Avei, Mahabir Jab Naam Sunavei.",
        meaning: "Great Brave one, Hanumanji's name keeps all the Ghosts, Demons & evil spirits away from his devotees."
      },
      {
        text: "Nasei Rog Hare Sab Peera, Japat Niranter Hanumant Beera",
        meaning: "On reciting Hanumanji's holy name regularly all the maladies perish the entire pain disappears."
      },
      {
        text: "Sankat Te Hanuman Chhudavei, Man Kram Bachan Dhyan Jo Lavei.",
        meaning: "Those who remember Hanumanji in thought, word and deed are well guarded against their odds in life."
      },
      {
        text: "Sub Par Ram Tapasvee Raaja, Tinke Kaaj Sakal Tum Saaja",
        meaning: "Oh Hanumanji! You are the caretaker of even Lord Rama, who has been hailed as the Supreme Lord and the Monarch of all those devoted in penances."
      },
      {
        text: "Aur Manorath Jo Koi Lave, Soi Amit Jivan Phal Pave.",
        meaning: "Oh Hanumanji! You fulfill the desires of those who come to you and bestow the eternal nectar the highest fruit of life."
      },
      {
        text: "Charo Juung Partap Tumhara, Hai Parsiddha Jagat Ujiyara.",
        meaning: "Oh Hanumanji! You magnificent glory is acclaimed far and wide all through the four ages and your fame is radiantly noted all over the cosmos."
      },
      {
        text: "Sadho Sant Ke Tum Rakhvare, Asur Nikandan Ram Dulare.",
        meaning: "Oh Hanumanji! You are the saviour and the guardian angel of saints and sages and destroy all the Demons, you are the seraphic darling of Shri Ram."
      },
      {
        text: "Ashta Siddhi Nau Nidhi Ke Data, Asa Bar Din Janki Mata.",
        meaning: "Hanumanji has been blessed with mother Janki to grant to any one any YOGIC power of eight Sidhis and Nava Nidhis as per choice."
      },
      {
        text: "Ram Rasayan Tumhare Pasa, Sadaa Raho Raghupati Ke Dasa.",
        meaning: "Oh Hanumanji! You hold the essence of devotion to RAM, always remaining His Servant."
      },
      {
        text: "Tumhare Bhajan Ramko Pavei, Janam Janam Ke Dukh Bisravei.",
        meaning: "Oh Hanumanji! through devotion to you, one comes to RAM and becomes free from suffering of several lives."
      },
      {
        text: "Anta Kaal Raghubar Pur Jai, Jahan Janma Hari Bhakta Kahai.",
        meaning: "After death he enters the eternal abode of Sri Ram and remains a devotee of him, whenever, taking new birth on earth."
      },
      {
        text: "Aur Devata Chitt Na Dharai, Hanumant Sei Sarva Sukh Karai",
        meaning: "You need not hold any other demigod in mind. Hanumanji alone will give all happiness."
      },
      {
        text: "Sankat Kate Mitey Sab Peera, Jo Sumirei Hanumant Balbeera",
        meaning: "Oh Powerful Hanumanji! You end the sufferings and remove all the pain from those who remember you."
      },
      {
        text: "Jai Jai Jai Hanuman Gosai, Kripa Karahu Gurudev Ki Naiee",
        meaning: "Hail-Hail-Hail-Lord Hanumanji! I beseech you Honour to bless me in the capacity of my supreme 'GURU' (teacher)."
      },
      {
        text: "Jo Sat Baar Paath Kar Koi, Chhutahi Bandi Maha Sukh Hoi.",
        meaning: "One who recites this Hanuman Chalisa one hundred times daily for one hundred days becomes free from the bondage of life and death and enjoys the highest bliss at last."
      },
      {
        text: "Jo Yah Padhe Hanuman Chalisa, Hoy Siddhi Sakhi Gaurisa",
        meaning: "As Lord Shankar witnesses, all those who recite Hanuman Chalisa regularly are sure to be benedicted"
      },
      {
        text: "Tulsidas Sada Hari Chera, Keeje Nath Hriday Mah Dera.",
        meaning: "Tulsidas always the servant of Lord prays. 'Oh my Lord! You enshrine within my heart.!'"
      },
    ],
    chopaaiTitle: "Chopai",
    chopaaiLyrics: [
      {
        text: "Pavan Tanay Sankat Haran, Mangal Murti Roop, Ram Lakhan Sita Sahit, Hriday Basahu Sur Bhoop",
        meaning: "O Shri Hanuman, The Son of Pavan, Saviour The Embodiment of blessings, reside in my heart together with Shri Ram, Laxman and Sita"
      }
    ],
    howToPerform: [
      "Sit facing east, light a diya/incense, and offer a small prayer to Lord Hanuman.",
      "Chant \"Om Shree Hanumate Namah\" once and calm your mind.",
      "Read or chant the Hanuman Chalisa from start to end, with devotion and steady rhythm.",
      "After finishing, chant \"Sri Ram Jai Ram Jai Jai Ram\" or Hanuman mantra once or 11 times.",
      "Offer a prayer for protection and gratitude, then bow silently."
    ]
  },
  "mahalakshmi-chalisa": {
    title: "Mahalakshmi Chalisa",
    bannerImage: "/puja/chalisa/slug/Mahalakshmi_Chalisa.webp",
    description:
      "Read Mahalakshmi Chalisa in English with Doha & Chaupai. Invoke the blessings of Goddess Lakshmi for wealth and prosperity.",
    dohaTitle: "Mahalakshmi Chalisa Doha in English",
    dohaLyrics: [
      {
        text: "Maat Lakshmi Kari Kripa, Karo Hriday Mein Vaas. Mani Mool Mantra Lakshmiji, Karo Vishesh Prakaash.",
      },
    ],
    chaupaiTitle: "Mahalakshmi Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Jai Jagat Janani Jagdamba, Sabke Tum Ho Rakhvari Amba." },
      { text: "Surya Chandrama Dhyavat, Narad Rishi Gaavat." },
      { text: "Durga Roop Niranjani, Sukh Sampati Ke Daani." },
      { text: "Jo Koi Dhyavey Lakshmiji Ko, Sadaa Sukhi Rahey Vo." },
    ],
  },
  "shiv-chalisa": {
    title: "Shiv Chalisa",
    bannerImage: "/puja/chalisa/slug/Shiv_Chalisa.webp",
    description:
      "Read Shiv Chalisa in English with Doha & Chaupai. Seek the blessings of Lord Shiva for spiritual growth and inner peace.",
    dohaTitle: "Shiv Chalisa Doha in English",
    dohaLyrics: [
      {
        text: "Jai Ganesh Girija Suvan, Mangal Mool Sujaan. Kahat Ayodhya Das Tum, Dehu Abhay Vardaan.",
      },
    ],
    chaupaiTitle: "Shiv Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Girijapati Deen Dayaala, Sada Karat Santan Pratipala." },
      { text: "Bhal Chandrama Sohati Neeke, Kanan Kundal Naag Phani Keeke." },
      { text: "Ang Gaur Shir Ganga Bahaye, Mundmaal Tan Chhar Lagaye." },
      { text: "Vastra Khaal Baghambar Sohe, Chavi Ko Dekh Naag Mun Mohe." },
    ],
  },
  "durga-chalisa": {
    title: "Durga Chalisa",
    bannerImage: "/puja/chalisa/slug/Durga_Chalisa.webp",
    description:
      "Read Durga Chalisa in English with Doha & Chaupai. Invoke the divine power of Maa Durga for protection and strength.",
    dohaTitle: "Durga Chalisa Doha in English",
    dohaLyrics: [
      { text: "Namo Namo Durge Sukh Karani, Namo Namo Ambe Dukh Harani." },
    ],
    chaupaiTitle: "Durga Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Ambe Gauri Maiya, Jai Shyama Gauri Maiya." },
      { text: "Tumko Nisdin Dhyavat Hari, Brahma Shivji." },
      { text: "Rishi Muni Pandit Dhyavat, Narad Sharad Shesh." },
      { text: "Doot Sat Sugriva Ke Aaye, Mukh Nikasee Bat." },
    ],
  },
  "kaali-chalisa": {
    title: "Kaali Chalisa",
    bannerImage: "/puja/chalisa/slug/Kaali_Chalisa.webp",
    description:
      "Read Kaali Chalisa in English with Doha & Chaupai. Invoke the fierce yet protective energy of Maa Kaali for courage and liberation from fear.",
    dohaTitle: "Kaali Chalisa Doha in English",
    dohaLyrics: [
      {
        text: "Jai Jai Jai Kaali Maa, Dukh Daridra Haro. Shatru Sankat Mite Sab, Kripa Drishti Dharo.",
      },
    ],
    chaupaiTitle: "Kaali Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Bhavani Jai Mahakaali, Shubh Karni Bhav Saagar Taari." },
      { text: "Trikaal Vandit Tumko Maata, Raksha Karo Tum Bhakt Vratata." },
    ],
  },
  "radha-chalisa": {
    title: "Radha Chalisa",
    bannerImage: "/puja/chalisa/slug/Radha_Chalisa.webp",
    description:
      "Read Radha Chalisa in English with Doha & Chaupai. Experience the divine love and devotion of Shri Radha Rani.",
    dohaTitle: "Radha Chalisa Doha in English",
    dohaLyrics: [
      { text: "Radhe Radhe Jap Le Nar, Sab Klesh Door Hoye. Prem Bhakti Ki Shakti Se, Jeevan Sukhmay Hoye." },
    ],
    chaupaiTitle: "Radha Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Jai Radha Vrindavan Dhaari, Prem Roop Tum Bhav Nistari." },
      { text: "Shyam Sang Tum Prem Milayi, Bhakt Hriday Mein Jyoti Jagayi." },
    ],
  },
  "parwati-chalisa": {
    title: "Parwati Chalisa",
    bannerImage: "/puja/chalisa/slug/Parwati_Chalisa.webp",
    description:
      "Read Parwati Chalisa in English with Doha & Chaupai. Seek the blessings of Maa Parwati for harmony, strength, and family well-being.",
    dohaTitle: "Parwati Chalisa Doha in English",
    dohaLyrics: [
      { text: "Gauri Shankar Ki Kripa Se, Jeevan Ho Ujjwal. Parwati Maa Vardan De, Kariye Bhakti Nirmal." },
    ],
    chaupaiTitle: "Parwati Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Jai Parwati Jag Janani, Shakti Roop Mahamangal Dhani." },
      { text: "Tum Bin Shiv Adhura Maata, Kar Do Kripa Sab Par Dayata." },
    ],
  },
  "santoshi-chalisa": {
    title: "Santoshi Chalisa",
    bannerImage: "/puja/chalisa/slug/Santoshi_Chalisa.webp",
    description:
      "Read Santoshi Chalisa in English with Doha & Chaupai. Pray to Maa Santoshi for contentment, peace, and fulfillment of wishes.",
    dohaTitle: "Santoshi Chalisa Doha in English",
    dohaLyrics: [
      { text: "Santoshi Maa Ki Bhakti Se, Man Ko Shanti Mile. Bhakt Janon Ke Ghar Mein, Sadaa Sukh Samriddhi Khile." },
    ],
    chaupaiTitle: "Santoshi Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Santoshi Maa Dayalu, Bhakt Vatsal Bhav Nirmal Vaali." },
      { text: "Prabhu Kripa Se Klesh Mitaao, Bhakt Ka Jeevan Sukhmaya Banao." },
    ],
  },
  "tulsi-chalisa": {
    title: "Tulsi Chalisa",
    bannerImage: "/puja/chalisa/slug/Tulsi_Chalisa.webp",
    description:
      "Read Tulsi Chalisa in English with Doha & Chaupai. Honor the sacred Tulsi plant, symbol of purity, devotion, and protection.",
    dohaTitle: "Tulsi Chalisa Doha in English",
    dohaLyrics: [
      { text: "Tulsi Dal Se Hari Prasanna, Paap Sab Ho Jaay. Bhakt Hriday Mein Prem Badhe, Jeevan Safal Banaay." },
    ],
    chaupaiTitle: "Tulsi Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Jai Tulsi Vrindawani, Hari Priya Tum Shubh Gun Khani." },
      { text: "Jo Tumko Shraddha Se Seve, Hari Kripa Se Paap Sab Dheve." },
    ],
  },
  "chamunda-chalisa": {
    title: "Chamunda Chalisa",
    bannerImage: "/puja/chalisa/slug/Chamunda_Chalisa.webp",
    description:
      "Read Chamunda Chalisa in English with Doha & Chaupai. Invoke Maa Chamunda to destroy negativity and grant fearless living.",
    dohaTitle: "Chamunda Chalisa Doha in English",
    dohaLyrics: [
      { text: "Chamunda Maa Ki Shakti Se, Shatru Bhay Sab Jaay. Bhakt Nirbhay Ho Jeevan Mein, Har Din Sukh Paay." },
    ],
    chaupaiTitle: "Chamunda Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Jai Chamunda Bhav Bhay Haarini, Raktabeej Vinashini Karuni." },
      { text: "Bhakton Ka Tum Raksha Karo, Dukh Daridra Sab Door Karo." },
    ],
  },
  "ram-chalisa": {
    title: "Ram Chalisa",
    bannerImage: "/puja/chalisa/slug/Ram_Chalisa.webp",
    description:
      "Read Ram Chalisa in English with Doha & Chaupai. Remember the virtues of Shri Ram for dharma, courage, and compassion.",
    dohaTitle: "Ram Chalisa Doha in English",
    dohaLyrics: [
      { text: "Shri Ram Naam Jo Gaave, Man Vanchhit Phal Paay. Bhav Saagar Se Taar De, Dukh Sab Door Hataay." },
    ],
    chaupaiTitle: "Ram Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Raghuveer Siya Ram Dayaalu, Patit Pawan Bhav Bhay Taalu." },
      { text: "Ram Kripa Se Jeevan Saare, Sukh Shanti Aur Prem Ujiyare." },
    ],
  },
  "navgrah-chalisa": {
    title: "Navgrah Chalisa",
    bannerImage: "/puja/chalisa/slug/Shree_Navgrah_Chalisa.webp",
    description:
      "Read Navgrah Chalisa in English with Doha & Chaupai. Seek harmony from all nine planets and reduce negative influences.",
    dohaTitle: "Navgrah Chalisa Doha in English",
    dohaLyrics: [
      { text: "Navgrah Devta Kripa Kar De, Dosh Sab Door Hoye. Shubh Fal De Kar Dayaa, Jeevan Mangal Hoye." },
    ],
    chaupaiTitle: "Navgrah Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Surya Chandra Mangal Budh Shani, Brihaspati Shukra Rahu Ketu Dhani." },
      { text: "Sab Ke Shubh Prabhav Se Maata, Jeevan Mein Ho Prem Aur Jyota." },
    ],
  },
  "saraswati-chalisa": {
    title: "Saraswati Chalisa",
    bannerImage: "/puja/chalisa/slug/Saraswati_Chalisa.webp",
    description:
      "Read Saraswati Chalisa in English with Doha & Chaupai. Pray to Maa Saraswati for wisdom, learning, and clarity of speech.",
    dohaTitle: "Saraswati Chalisa Doha in English",
    dohaLyrics: [
      { text: "Veena Vaadini Vaani De, Buddhi Bal De Maata. Vidya Vardhaaye Nitya Tu, Door Kar Durgati Taata." },
    ],
    chaupaiTitle: "Saraswati Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Jai Saraswati Vidhyadayini, Hans Vahini Gyaan Pradaini." },
      { text: "Jo Tumko Man Se Dhyayega, Agyaan Andhera Mit Jaayega." },
    ],
  },
  "vishnu-chalisa": {
    title: "Vishnu Chalisa",
    bannerImage: "/puja/chalisa/slug/Vishnu_Chalisa.webp",
    description:
      "Read Vishnu Chalisa in English with Doha & Chaupai. Connect with Lord Vishnu, preserver of the universe and giver of stability.",
    dohaTitle: "Vishnu Chalisa Doha in English",
    dohaLyrics: [
      { text: "Om Namo Narayanaya, Prem Se Jo Gave. Vishnu Kripa Se Jeevan Mein, Anand Anant Paave." },
    ],
    chaupaiTitle: "Vishnu Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Jai Vishnu Jagat Palaak, Shesh Shaiya Par Sukh Vilaasak." },
      { text: "Dashavatar Ke Roop Niraale, Bhakt Bachaawe Bhav Dukh Taale." },
    ],
  },
  "surya-dev-chalisa": {
    title: "Surya Dev Chalisa",
    bannerImage: "/puja/chalisa/slug/Surya_Dev_Chalisa.webp",
    description:
      "Read Surya Dev Chalisa in English with Doha & Chaupai. Worship the Sun God for vitality, confidence, and success.",
    dohaTitle: "Surya Dev Chalisa Doha in English",
    dohaLyrics: [
      { text: "Om Suryaya Namaha, Tej Tumhara Prakash. Andhkaar Sab Door Ho, Jeevan Ho Ujjval Vikaash." },
    ],
    chaupaiTitle: "Surya Dev Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Surya Narayan Devta, Jag Ko De Prabhu Alokata." },
      { text: "Rog Shok Sab Door Bhagao, Tejmay Jeevan Shanti Liao." },
    ],
  },
  "sheetla-chalisa": {
    title: "Sheetla Chalisa",
    bannerImage: "/puja/chalisa/slug/Sheetla_Chalisa.webp",
    description:
      "Read Sheetla Chalisa in English with Doha & Chaupai. Pray to Maa Sheetla for protection from diseases and good health.",
    dohaTitle: "Sheetla Chalisa Doha in English",
    dohaLyrics: [
      { text: "Sheetla Maa Kripa Kar De, Rog Sab Door Hoye. Swasth Sharir Aur Shant Mann, Har Din Anand Hoye." },
    ],
    chaupaiTitle: "Sheetla Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Jai Sheetla Maa Dayalu, Rog Nashini Bhav Bhay Taalu." },
      { text: "Jo Tumko Nitya Smaran Kare, Dukh Dard Sab Door Bhare." },
    ],
  },
  "sai-baba-chalisa": {
    title: "Sai Baba Chalisa",
    bannerImage: "/puja/chalisa/slug/Sai_Baba_Chalisa.webp",
    description:
      "Read Sai Baba Chalisa in English with Doha & Chaupai. Remember Sai Baba's teachings of faith, patience, and universal love.",
    dohaTitle: "Sai Baba Chalisa Doha in English",
    dohaLyrics: [
      { text: "Sai Naam Jo Gaave Nitya, Uska Dukh Sab Jaay. Shraddha Saburi Rakh Ke Jo, Man Ki Murad Paay." },
    ],
    chaupaiTitle: "Sai Baba Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Jai Sai Nath Dayaalu, Dwarkamai Ke Vaasik Vaali." },
      { text: "Garib Niwaaz Tum Ho Baba, Sab Par Kripa Barsao Aaja." },
    ],
  },
  "bhairav-chalisa": {
    title: "Bhairav Chalisa",
    bannerImage: "/puja/chalisa/slug/Bhairav_Chalisa.webp",
    description:
      "Read Bhairav Chalisa in English with Doha & Chaupai. Invoke Kaal Bhairav for protection, courage, and removal of obstacles.",
    dohaTitle: "Bhairav Chalisa Doha in English",
    dohaLyrics: [
      { text: "Jai Kaal Bhairav Nath, Raksha Karo Din Raat. Shatru Bhay Sab Door Ho, Bhakt Rahe Sadaa Saath." },
    ],
    chaupaiTitle: "Bhairav Chalisa Chaupai in English",
    chaupaiLyrics: [
      { text: "Jai Jai Bhairav Kashi Vaasi, Kapal Dhari Bhav Bhay Naashi." },
      { text: "Tumsa Rakshak Koi Na Dooja, Sharan Pade Bhakt Karo Sajja." },
    ],
  },
};

// Default chalisa data for slugs not in the database
const defaultChalisa: ChalisaDetail = {
  title: "Chalisa",
  bannerImage:
    "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=1200&h=600&fit=crop&q=80",
  description:
    "Read this sacred Chalisa in English with Doha & Chaupai. Discover its meaning & power for spiritual growth and divine blessings.",
  dohaTitle: "Chalisa Doha in English",
  dohaLyrics: [
    { text: "Shri Guru Charan Saroj Raj, Nij Manu Mukur Sudhaari." },
    { text: "Baranau Raghubar Vimal Jas, Jo Daayak Phal Chari." },
  ],
  chaupaiTitle: "Chalisa Chaupai in English",
  chaupaiLyrics: [
    { text: "Jai Jai Jai, Divine grace upon all." },
    { text: "May peace and blessings be with you always." },
  ],
};

export default function ChalisaDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Get chalisa data or use default
  const chalisa = chalisaData[slug] || {
    ...defaultChalisa,
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    dohaTitle: `${slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")} Doha in English`,
    chaupaiTitle: `${slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")} Chaupai in English`,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="pt-28 pb-6 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
            <Link href="/" className="hover:text-[#FF9800] transition-colors">
              Home
            </Link>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/chalisa"
              className="hover:text-[#FF9800] transition-colors"
            >
              Chalisa Collection
            </Link>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="font-semibold text-[#333355]">
              {chalisa.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Banner Image */}
      <div className="px-4 md:px-6 lg:px-8 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden bg-[#5D4037]">
            <Image
              src={chalisa.bannerImage}
              alt={chalisa.title}
              fill
              className="object-cover"
              unoptimized
            />
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#5D4037]/90 to-transparent flex items-center justify-end">
              <h2 className="text-3xl md:text-5xl font-bold text-white pr-8 md:pr-16 text-right">
                {chalisa.title.split(" ").slice(0, -1).join(" ")}
                <br />
                {chalisa.title.split(" ").slice(-1)}
              </h2>
            </div>
            {/* Download & Share Buttons */}
            <div className="absolute top-4 right-4 flex items-center gap-4">
              <button className="text-white text-xs flex flex-col items-center hover:opacity-80 transition-opacity">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Download</span>
              </button>
              <button className="text-white text-xs flex flex-col items-center hover:opacity-80 transition-opacity">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="px-4 md:px-6 lg:px-8 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg
                className="w-5 h-5 text-[#25D366]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF7B60] via-[#FF9F87] to-[#FFB59F] bg-clip-text text-transparent mb-6">
            {chalisa.title}
          </h1>

          {/* Description */}
          <div className="bg-gradient-to-br from-[#FFF8F5] to-white rounded-2xl p-6 md:p-8 mb-10 border border-[#FFB59F]/20 shadow-lg">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {chalisa.description}
            </p>
          </div>

          {/* Doha Section */}
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FF7B60] to-[#FFB59F] bg-clip-text text-transparent mb-6">
            {chalisa.dohaTitle}
          </h2>

          <div className="bg-gradient-to-br from-[#FFF8F5] via-white to-[#FFF8F5] rounded-2xl p-6 md:p-8 mb-10 border border-[#FFB59F]/30 shadow-lg">
            <div className="space-y-8">
              {chalisa.dohaLyrics.map((line, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7B60] to-[#FFB59F] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="text-gray-800 leading-relaxed text-base md:text-lg italic flex-1 pt-2 font-medium">
                      {typeof line === 'string' ? line : line.text}
                    </p>
                  </div>
                  {typeof line === 'object' && line.meaning && (
                    <div className="ml-14 mt-3 p-4 bg-gradient-to-r from-[#FFF8F5] to-white rounded-xl border-l-4 border-[#FF7B60]">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        <span className="font-semibold text-[#FF7B60]">Meaning: </span>
                        {line.meaning}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Chaupai Section */}
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FF7B60] to-[#FFB59F] bg-clip-text text-transparent mb-6">
            {chalisa.chaupaiTitle}
          </h2>

          <div className="bg-gradient-to-br from-white via-[#FFF8F5] to-white rounded-2xl p-6 md:p-8 mb-8 border border-[#FFB59F]/30 shadow-lg">
            <div className="space-y-6">
              {chalisa.chaupaiLyrics.map((line, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#FF7B60] to-[#FFB59F] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-800 leading-relaxed text-base md:text-lg italic flex-1 pt-1">
                      {typeof line === 'string' ? line : line.text}
                    </p>
                  </div>
                  {typeof line === 'object' && line.meaning && (
                    <div className="ml-12 mt-3 p-4 bg-gradient-to-r from-[#FFF8F5] to-white rounded-xl border-l-4 border-[#FF7B60]">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        <span className="font-semibold text-[#FF7B60]">Meaning: </span>
                        {line.meaning}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Chopai Section (Optional) */}
          {chalisa.chopaaiTitle && chalisa.chopaaiLyrics && (
            <>
              <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FF7B60] to-[#FFB59F] bg-clip-text text-transparent mb-6">
                {chalisa.chopaaiTitle}
              </h2>

              <div className="bg-gradient-to-br from-[#FFF8F5] via-white to-[#FFF8F5] rounded-2xl p-6 md:p-8 border border-[#FFB59F]/30 shadow-lg">
                <div className="space-y-6">
                  {chalisa.chopaaiLyrics.map((line, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB59F] to-[#FF7B60] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-800 leading-relaxed text-base md:text-lg italic flex-1 pt-2 font-medium">
                          {typeof line === 'string' ? line : line.text}
                        </p>
                      </div>
                      {typeof line === 'object' && line.meaning && (
                        <div className="ml-14 mt-3 p-4 bg-gradient-to-r from-[#FFF8F5] to-white rounded-xl border-l-4 border-[#FF7B60]">
                          <p className="text-sm text-gray-600 leading-relaxed">
                            <span className="font-semibold text-[#FF7B60]">Meaning: </span>
                            {line.meaning}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* How to Perform Section */}
          {chalisa.howToPerform && chalisa.howToPerform.length > 0 && (
            <>
              <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FF7B60] to-[#FFB59F] bg-clip-text text-transparent mb-6 mt-10">
                How to Perform {chalisa.title}
              </h2>

              <div className="bg-gradient-to-br from-[#FFF8F5] via-white to-[#FFF8F5] rounded-2xl p-6 md:p-8 border border-[#FFB59F]/30 shadow-lg">
                <div className="space-y-5">
                  {chalisa.howToPerform.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-[#10B981]/10 to-transparent rounded-xl border-l-4 border-[#10B981]">
                  <p className="text-sm text-gray-600 italic">
                    💡 <span className="font-semibold">Tip:</span> Chanting with devotion and a calm mind brings the greatest spiritual benefit. Regular practice on Tuesdays and Saturdays is considered especially auspicious.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}


