// Stories are ordered as a suggested Tamil Navaratri reading sequence:
// Durga first, Lakshmi near the middle, and Saraswati last.
// A full story may be a simple string or a structured object with sections.
const STORIES = [
  {
    "id": "durga-and-mahishasura",
    "category": "Durga and Parvati · துர்க்கை / பார்வதி",
    "title": "Durga and Mahishasura",
    "summary": "Protected from defeat by any god or man, the shape-shifting Mahishasura conquers heaven and drives out the Devas. Their combined divine energy creates Durga, who rides into battle on a lion and restores justice after a fierce struggle.",
    "full": {
      "sections": [
        {
          "heading": null,
          "paragraphs": [
            "Long ago, there lived a powerful Asura named Mahishasura (மகிஷாசுரன்). He could change his shape, appearing sometimes as a man and sometimes as a mighty buffalo. Mahishasura wanted to become the most powerful ruler in the universe.",
            "He performed penance to Lord Brahma (பிரம்மா) for many years. When Brahma appeared and offered him a boon, Mahishasura asked that no god or man should be able to defeat him. Brahma granted the boon. Mahishasura was delighted, believing himself unbeatable. But he had forgotten to ask for protection from women."
          ]
        },
        {
          "heading": "The Gods Are Defeated",
          "paragraphs": [
            "With his new powers, Mahishasura gathered an enormous army and marched into heaven. He challenged Indra (இந்திரன்), king of the Devas, and defeated him. The Devas were driven from heaven and went to Brahma, Vishnu (விஷ்ணு), and Shiva (சிவபெருமான்) for help. The three great gods knew that Mahishasura's boon protected him from gods and men, but not from a goddess."
          ]
        },
        {
          "heading": "The Birth of Durga",
          "paragraphs": [
            "A brilliant light shone from Vishnu, Shiva, Brahma, and the other gods. Their divine energies came together, brighter than a thousand suns. From this light appeared Durga (துர்க்கை அம்மன்), a radiant goddess with many arms and extraordinary courage.",
            "The gods gave Durga their weapons. Shiva gave her his trident; Vishnu gave her his discus, the Sudarshana Chakra (சுதர்சன சக்கரம்); Indra gave her his thunderbolt; and other gods gave her a sword, bow, arrows, and other weapons. Durga rode a magnificent lion into battle."
          ]
        },
        {
          "heading": "The Great Battle",
          "paragraphs": [
            "Mahishasura sent his strongest warriors against Durga, but she defeated them. Finally, Mahishasura himself came forward. He took the form of an enormous buffalo and charged, shaking the ground beneath his hooves. Durga fought him with her divine weapons.",
            "Mahishasura kept changing form. He appeared as a lion, a man carrying a sword, and an elephant before returning to his buffalo shape. Durga met each attack. At last, she pinned him down and defeated him with her trident."
          ]
        },
        {
          "heading": "The Victory",
          "paragraphs": [
            "The Devas rejoiced. Flowers fell from heaven, and Indra and the other gods were able to return to their places. Durga became known as Mahishasuramardini (மகிஷாசுரமர்த்தினி), the goddess who defeated Mahishasura.",
            "During Navaratri (நவராத்திரி), many families celebrate the goddess and her victory. The tenth day, Vijayadashami (விஜயதசமி), is associated with victory and new beginnings."
          ]
        }
      ],
      "lesson": {
        "label": "Lesson:",
        "text": "Strength is best used to protect others and stand up for what is right."
      }
    }
  },
  {
    "id": "durga-and-chamunda",
    "category": "Durga and Parvati · துர்க்கை / பார்வதி",
    "title": "Durga and Chamunda",
    "summary": "When the fierce Asuras Chanda and Munda challenge Durga, the powerful goddess Kali emerges from Durga’s forehead. Kali defeats them and receives the name Chamunda, revealing the Divine Mother’s fearsome power to protect the world.",
    "full": "Two fierce Asuras, Chanda (சண்டன்) and Munda (முண்டன்), challenged the goddess Durga (துர்க்கை). In a famous episode of the Devi Mahatmya (தேவி மகாத்மியம்), a powerful dark goddess emerged from her forehead: Kali (காளி). Kali defeated the two enemies and received the name Chamunda (சாமுண்டி). The story shows that the Divine Mother can appear gentle or fierce when protecting the world."
  },
  {
    "id": "why-families-celebrate-navaratri",
    "category": "Durga and Parvati · துர்க்கை / பார்வதி",
    "title": "Why Families Celebrate Navaratri",
    "summary": "Navaratri fills nine nights with lamps, songs, prayer, and, in many Tamil homes, a Golu display of dolls. Families honor Durga for strength, Lakshmi for prosperity, and Saraswati for learning.",
    "full": "For nine nights, many Hindu families celebrate Navaratri (நவராத்திரி) with lamps, songs, prayers, and sometimes a display of dolls called Golu (கொலு). In a familiar Tamil devotional pattern, worship honors Durga (துர்க்கை) for strength, Lakshmi (லட்சுமி) for prosperity, and Saraswati (சரஸ்வதி) for learning. This is a festival explanation, rather than a traditional episode in which the goddess herself invented the festival."
  },
  {
    "id": "the-child-who-prayed-for-courage",
    "category": "Durga and Parvati · துர்க்கை / பார்வதி",
    "title": "The Child Who Prayed for Courage",
    "summary": "A child who prays to Durga discovers that courage is not the absence of fear but the willingness to speak when others are in danger. One small voice helps a cruel ruler recognize the harm he has caused.",
    "full": "A young child prays every day to Durga (துர்க்கை) for courage. When a cruel ruler frightens the village, the child remembers the goddess’s strength and speaks up for those in danger. The ruler eventually sees the harm he has caused. This is an original teaching tale inspired by Durga’s protective character, not a verified Purāṇic episode. Its message is that courage can begin with a small voice."
  },
  {
    "id": "the-elephant-headed-boy",
    "category": "Ganesha · விநாயகர்",
    "title": "The Elephant-Headed Boy",
    "summary": "Ganesha faithfully guards Parvati’s doorway, even when Shiva demands to enter. After a terrible misunderstanding, Shiva restores the boy with an elephant’s head, and Ganesha becomes the beloved guardian of new beginnings.",
    "full": "Parvati (பார்வதி) created a boy named Ganesha (கணேசர் / விநாயகர்) and asked him to guard her doorway. When Shiva (சிவன்) arrived, the boy refused to let him enter. A battle followed, and Shiva cut off his head. Seeing Parvati’s grief, Shiva restored the boy to life with an elephant’s head. Ganesha became a beloved god whom people pray to before beginning something new."
  },
  {
    "id": "the-wisdom-fruit",
    "category": "Ganesha · விநாயகர்",
    "title": "The Wisdom Fruit",
    "summary": "Ganesha and Murugan are challenged to race around the world for a fruit of wisdom. While Murugan speeds away on his peacock, Ganesha recognizes that his parents are his whole world and wins through insight rather than speed.",
    "full": "The sage Narada (நாரதர்) brought a special wisdom fruit to Shiva (சிவன்) and Parvati (பார்வதி). Their sons Ganesha (விநாயகர்) and Murugan (முருகன்) were challenged to circle the world. Murugan raced away on his peacock, but Ganesha walked around his parents, saying they were his whole world. He won the fruit. In the Tamil telling, Murugan later went to Palani (பழனி)."
  },
  {
    "id": "ganesha-and-the-moon",
    "category": "Ganesha · விநாயகர்",
    "title": "Ganesha and the Moon",
    "summary": "After the Moon mocks Ganesha for falling from his mouse, Ganesha places a curse upon him and later softens it. The festival tradition connects that curse to Krishna’s false accusation over the Syamantaka jewel and teaches children not to ridicule or accuse others carelessly.",
    "full": {
      "sections": [
        {
          "heading": "Ganesha Falls from His Mouse",
          "paragraphs": [
            "One evening, Ganesha (விநாயகர்) had enjoyed a wonderful feast of modakams and kozhukattais. His belly was full as he rode home on his little mouse, Mushika (மூஷிகன்).",
            "Suddenly a snake appeared. The mouse was startled, and Ganesha fell to the ground. In one popular version, his belly burst open and the sweets spilled out. Ganesha gathered everything and tied a snake around his belly.",
            "High in the sky, Chandra (சந்திரன்), the Moon god, saw the fall and laughed at Ganesha's appearance. Ganesha was angry that Chandra had mocked him."
          ]
        },
        {
          "heading": "The Curse",
          "paragraphs": [
            "Ganesha cursed the Moon. In some versions, the curse caused the Moon to lose its light and disappear. The world grew dark, and the gods were worried. Chandra regretted his behavior, bowed to Ganesha, and asked forgiveness.",
            "Ganesha softened the curse. One tradition connects this with the Moon's monthly waxing and waning. Another says that someone who looks at the Moon on Vinayaka Chaturthi (விநாயகர் சதுர்த்தி) may suffer a false accusation—being blamed for something they did not do. This is the origin of the custom, observed in some families, of avoiding the Moon that night."
          ]
        },
        {
          "heading": "Krishna and the Syamantaka Jewel",
          "paragraphs": [
            "A wealthy man named Satrajit (சத்ராஜித்) was devoted to Surya (சூரியன்), the Sun god. Surya gave him a remarkable jewel called the Syamantaka Mani (சியமந்தக மணி). The jewel was said to produce gold and bring prosperity when kept by a righteous person.",
            "Krishna (கிருஷ்ணர்) suggested that Satrajit give the jewel to Ugrasena (உக்கிரசேனன்), the king of Dwaraka, for the good of the kingdom. Satrajit refused.",
            "One day, Satrajit's brother Prasena (பிரசேனன்) wore the jewel while hunting. A lion killed Prasena and carried off the jewel. Then the mighty bear Jambavan (ஜாம்பவான்) defeated the lion and took the jewel to his cave, where he gave it to his child as a toy.",
            "Nobody in Dwaraka knew what had happened. When Prasena failed to return, people suspected Krishna of taking the jewel. Krishna was falsely accused of theft."
          ]
        },
        {
          "heading": "Krishna Finds the Truth",
          "paragraphs": [
            "Krishna followed Prasena's tracks into the forest. He found evidence of the lion's attack, then followed the trail to Jambavan's cave. Jambavan did not recognize Krishna, and they fought for many days. At last Jambavan recognized Krishna as the Lord he had served in the form of Rama. He returned the jewel.",
            "Krishna brought the Syamantaka jewel back to Dwaraka and explained what had happened. Satrajit apologized, and Krishna's innocence was established."
          ]
        },
        {
          "heading": "The Connection and Remedy",
          "paragraphs": [
            "In a popular Ganesh Chaturthi tradition, Krishna had accidentally looked at the Moon on the forbidden night. His false accusation over the Syamantaka jewel is connected to Ganesha's curse. A customary remedy for accidentally seeing the Moon is to hear or recite the story of Krishna and the Syamantaka jewel. Some traditions also prescribe a Sanskrit verse about the jewel.",
            "The Syamantaka episode appears in the Bhagavata Purana (Book 10, Chapters 56–57) and the Vishnu Purana. Not every scriptural telling explicitly connects it to Ganesha's Moon curse; that connection belongs to a broader festival storytelling tradition."
          ]
        }
      ],
      "lesson": {
        "label": "Lessons:",
        "text": "Do not mock others. Do not accuse someone without evidence. Search for the truth."
      }
    }
  },
  {
    "id": "the-pillaiyar-ants",
    "category": "Ganesha · விநாயகர்",
    "title": "The Pillaiyar Ants",
    "summary": "Tiny black ants sharing grains of rice remind Parvati that even the smallest lives deserve kindness. This Tamil folk tradition affectionately links the little creatures with Pillaiyar, another name for Ganesha.",
    "full": "In a Tamil folk tale, Parvati (பார்வதி) noticed tiny black ants eating grains of rice that had been set aside. The little creatures reminded her that even the smallest lives deserve attention and care. Some Tamil households affectionately call such ants Pillaiyar ants (பிள்ளையார் எறும்புகள்), connecting them with Ganesha (பிள்ளையார்). This is a regional folk tradition rather than a single widely established Purāṇic episode."
  },
  {
    "id": "the-churning-of-the-ocean-of-milk",
    "category": "Vishnu · திருமால்",
    "title": "The Churning of the Ocean of Milk",
    "summary": "The weakened Devas and the Asuras work together to churn the Ocean of Milk in search of the nectar of immortality. With Vishnu supporting the mountain as Kurma and Shiva containing a deadly poison, the great effort brings forth Lakshmi, Dhanvantari, and many treasures.",
    "full": "After Durvasa (துர்வாசர்) cursed Indra (இந்திரன்), the weakened Devas (தேவர்கள்) sought help from Vishnu (திருமால்). He told them to cooperate with the Asuras (அசுரர்கள்) and churn the Ocean of Milk (பாற்கடல்) for Amritam (அமிர்தம்). They used Mandara (மந்தர மலை) as the rod and Vasuki (வாசுகி) as the rope. Vishnu became the tortoise Kurma (கூர்மம்) to support the sinking mountain. Shiva (சிவன்) contained the deadly poison; Lakshmi (லட்சுமி) and other treasures emerged. Finally Dhanvantari (தன்வந்தரி) appeared carrying the nectar."
  },
  {
    "id": "mohini-the-clever-disguise",
    "category": "Vishnu · திருமால்",
    "title": "Mohini, the Clever Disguise",
    "summary": "When the Asuras seize the nectar of immortality, Vishnu takes the enchanting form of Mohini to recover it for the Devas. Rahu nearly succeeds in drinking some, but the Sun and Moon recognize his disguise just in time.",
    "full": "When the Asuras (அசுரர்கள்) took the pot of Amritam (அமிர்தம்), the Devas (தேவர்கள்) feared they would never regain their strength. Vishnu (திருமால்) appeared as Mohini (மோகினி), a captivating woman. The Asuras trusted her to divide the nectar, but she served it to the Devas. One Asura, Rahu (ராகு), disguised himself and took a sip before the Sun (சூரியன்) and Moon (சந்திரன்) recognized him. Vishnu stopped him. Mohini is a form of Vishnu, though not usually counted among the ten Dashavatara (தசாவதாரம்)."
  },
  {
    "id": "lakshmi-rises-from-the-ocean",
    "category": "Lakshmi · லட்சுமி",
    "title": "Lakshmi Rises from the Ocean",
    "summary": "As the Ocean of Milk is churned, Lakshmi rises from the waters holding a lotus and chooses Vishnu as her companion. Her joyful arrival represents prosperity, well-being, and good fortune.",
    "full": "When the Devas (தேவர்கள்) and Asuras (அசுரர்கள்) churned the Ocean of Milk (பாற்கடல்), wonderful treasures appeared. Among them was Lakshmi (லட்சுமி / திருமகள்), radiant and holding a lotus. In the traditional account, she chose Vishnu (திருமால்) as her companion. Families remember Lakshmi as the goddess of prosperity, well-being, and good fortune. Her appearance is one of the joyful moments in the great ocean-churning story."
  },
  {
    "id": "a-guest-and-a-bowl-of-rice",
    "category": "Lakshmi · லட்சுமி",
    "title": "A Guest and a Bowl of Rice",
    "summary": "A family with very little food still welcomes a mysterious guest and shares its rice. The guest is Lakshmi, who blesses their generosity and shows that true abundance begins with kindness.",
    "full": "In a simple devotional-style tale, Lakshmi (லட்சுமி) visits a household disguised as a guest. Although the family has little food, they offer her a share of their rice. Lakshmi blesses their generosity, and the home finds happiness and plenty. This is a teaching-style retelling rather than one specific classical episode. Its message is easy to remember: welcome guests kindly and share what you can."
  },
  {
    "id": "the-lotus-lesson",
    "category": "Lakshmi · லட்சுமி",
    "title": "The Lotus Lesson",
    "summary": "Lakshmi’s lotus grows clean and beautiful even though it rises from muddy water. Its image teaches children that difficult circumstances do not prevent them from becoming kind, generous, and good.",
    "full": "Lakshmi (லட்சுமி) is often pictured on a beautiful lotus that rises clean above muddy water. Parents sometimes use this image to tell children a short lesson: just as the lotus blossoms in a pond, we can grow into kind and generous people even when life is difficult. This is a symbolic teaching based on Lakshmi’s imagery, not a fixed ancient story with a single plot."
  },
  {
    "id": "garuda-and-the-nectar-of-immortality",
    "category": "Garuda · கருடன்",
    "title": "Garuda and the Nectar of Immortality",
    "summary": "When deception leaves his mother Vinata enslaved to the Nagas, the mighty Garuda sets out to win her freedom by bringing them the nectar of immortality. His courage, restraint, and devotion earn the friendship of Vishnu and Indra—and allow him to keep his promise without letting the serpents drink the nectar.",
    "full": {
      "sections": [
        {
          "heading": "Vinata and Kadru",
          "paragraphs": [
            "The sage Kashyapa (காசியபர்) had two wives named Vinata (விநதை) and Kadru (கத்ரு). Kadru became the mother of the Nagas (நாகர்கள்), the serpent children. Vinata received two eggs. From one came Aruna (அருணன்), who became the charioteer of Surya, the Sun. The second egg took much longer to hatch.",
            "One day the sisters argued about Uchchaihshravas (உச்சைச்சிரவஸ்), the magnificent white horse that had risen from the Ocean of Milk. Vinata said the horse was completely white, while Kadru claimed that its tail was black. They agreed that whoever was wrong would become the other's servant."
          ]
        },
        {
          "heading": "The Deceptive Wager",
          "paragraphs": [
            "Kadru secretly ordered her serpent sons to cling to the horse's tail like black hairs. When the sisters went to inspect the horse, its white body appeared to have a black tail. Vinata lost the wager and was forced into service, even though she had been deceived.",
            "At last Vinata's second egg opened. Garuda (கருடன்) emerged as a vast and radiant bird, shining so brightly that the Devas first mistook him for a great fire. He could change his size, fly wherever he wished, and move with extraordinary speed. When the frightened Devas asked him to soften his brilliance, Garuda kindly made himself smaller."
          ]
        },
        {
          "heading": "The Price of Freedom",
          "paragraphs": [
            "Garuda saw that his mother had to obey Kadru and the Nagas. He asked Vinata why they lived in bondage, and she told him about the wager. Garuda then asked the Nagas what he must do to free her.",
            "The Nagas demanded Amritam (அமிர்தம்), the nectar of immortality guarded by the Devas. Garuda agreed. He did not want the nectar for himself; he wanted only to rescue his mother. With Vinata's blessing, he spread his powerful wings and began the dangerous journey."
          ]
        },
        {
          "heading": "The Guardians of the Nectar",
          "paragraphs": [
            "The Devas prepared to defend the nectar, but Garuda swept through their ranks with the wind and dust raised by his wings. Beyond them he found a wall of blazing fire. He gathered water from many rivers and extinguished the flames.",
            "Next came a sharp metal wheel spinning without pause. Garuda made himself tiny and slipped safely between its spokes. Two fierce serpents guarded the nectar beyond the wheel. Garuda scattered dust over their eyes, passed them, and seized the vessel of Amritam.",
            "Although the nectar could grant immortality, Garuda did not drink a single drop. Carrying it for someone else's sake showed that his self-control was as great as his strength."
          ]
        },
        {
          "heading": "Garuda and Vishnu",
          "paragraphs": [
            "As Garuda flew home, he met Vishnu (திருமால்). Vishnu admired the great bird for taking the nectar without drinking it and offered him a boon. Garuda asked to remain immortal and free from illness without needing the Amritam. Vishnu granted his wish.",
            "Garuda then offered Vishnu a boon in return. Vishnu asked Garuda to become his vahana—his mount and companion. Garuda gladly agreed, beginning the bond for which he is remembered in temples and stories."
          ]
        },
        {
          "heading": "A Promise to Indra",
          "paragraphs": [
            "Indra (இந்திரன்) tried to stop Garuda with his thunderbolt, but the mighty bird continued on. Garuda respected Indra and the sacred weapon, and the two began to speak instead of fighting.",
            "Garuda explained that he had promised to deliver the nectar only to win his mother's freedom. He did not intend to let the Nagas drink it. He told Indra that after he placed the vessel down, Indra could take it safely back to heaven. Pleased by Garuda's wisdom, Indra accepted his friendship."
          ]
        },
        {
          "heading": "Vinata Is Free",
          "paragraphs": [
            "Garuda returned to the Nagas and placed the Amritam on sacred kusha grass. He told them to free Vinata and to wash before drinking the nectar. The Nagas agreed, and Garuda's mother was released from bondage.",
            "While the Nagas were away, Indra carried the vessel back to heaven. When they returned, they found only the kusha grass. Hoping that a drop of nectar remained, they licked the sharp grass, and their tongues split in two. This part of the tale explains why snakes have forked tongues and why kusha grass is considered sacred.",
            "Garuda had kept his word, protected the nectar, and freed his mother. He became celebrated as the king of birds, the companion of Vishnu, and a legendary enemy of serpents."
          ]
        }
      ],
      "lesson": {
        "label": "Lessons:",
        "text": "Use strength in service of others. Keep your promises without abandoning wisdom. Self-control can be a greater power than force."
      },
      "source": "Source: Mahabharata, Adi Parva, Astika Parva, especially Sections 20–34. This is a child-friendly prose retelling, not a word-for-word translation."
    }
  },
  {
    "id": "kumbhakarnas-mixed-up-wish",
    "category": "Rama, Hanuman and Kumbhakarna · இராமாயணம்",
    "title": "Kumbhakarna’s Mixed-Up Wish",
    "summary": "Kumbhakarna performs great penance but, in a popular telling, Saraswati tangles his speech as he asks Brahma for a boon. Instead of gaining Indra’s throne, the giant receives an extraordinary life of long, deep sleep.",
    "full": "The giant Kumbhakarna (கும்பகர்ணன்), brother of Ravana (இராவணன்), performed penance to receive a boon from Brahma (பிரம்மா). In a popular later telling, he meant to ask for Indrasana (இந்திராசனம்), Indra’s throne, but Saraswati (சரஸ்வதி) confused his speech, and he asked for Nidrasana (நித்திராசனம்), sleep, instead. The boon became a long sleep, often told as six months at a time. Versions differ on his intended words and the cause of his sleep."
  },
  {
    "id": "the-sleeping-giant-goes-to-battle",
    "category": "Rama, Hanuman and Kumbhakarna · இராமாயணம்",
    "title": "The Sleeping Giant Goes to Battle",
    "summary": "Ravana’s soldiers make an enormous racket to wake Kumbhakarna and send him into battle against Rama. Though the giant knows Ravana was wrong to take Sita, he chooses family loyalty and is forced to face the consequences of that choice.",
    "full": "When Ravana (இராவணன்) was losing his war against Rama (இராமர்), he ordered his soldiers to wake his enormous brother Kumbhakarna (கும்பகர்ணன்). They sounded drums and made a tremendous racket until he stirred. Kumbhakarna told Ravana that taking Sita (சீதை) had been wrong, yet chose to fight beside his brother. He was a formidable warrior, but Rama defeated him. His story asks whether loyalty should ever come before doing what is right."
  },
  {
    "id": "hanuman-in-ravanas-court",
    "category": "Rama, Hanuman and Kumbhakarna · இராமாயணம்",
    "title": "Hanuman in Ravana’s Court",
    "summary": "After finding Sita in Lanka, Hanuman boldly confronts Ravana and urges him to return her. Ravana sets Hanuman’s tail ablaze, but Hanuman escapes, burns parts of Lanka, and carries hopeful news back to Rama.",
    "full": "Hanuman (அனுமன்) crossed the sea to Lanka (இலங்கை) and found Sita (சீதை) in the Ashoka grove (அசோக வனம்). After delivering Rama’s (இராமர்) message, he was captured and brought before Ravana (இராவணன்). Hanuman fearlessly urged the king to return Sita. Ravana wanted him punished, but Vibhishana (விபீஷணன்) said a messenger should not be killed. Ravana ordered Hanuman’s tail set on fire. Hanuman escaped, set parts of Lanka ablaze, and returned with news of Sita."
  },
  {
    "id": "the-butter-thief",
    "category": "Krishna · கிருஷ்ணர்",
    "title": "The Butter Thief",
    "summary": "Young Krishna invents playful ways to reach the butter pots that Yashoda hangs high above him. His affectionate mischief—and his habit of sharing the butter with friends—makes him Gokulam’s beloved little butter thief.",
    "full": "Little Krishna (கிருஷ்ணர்) adored fresh butter. His mother Yashoda (யசோதை) hung the butter pots high so he could not reach them. Krishna found clever ways to climb up, sometimes with the help of his friends, and shared the butter. When Yashoda discovered the mischief, she scolded him with affection. Stories of the butter thief celebrate Krishna’s playful childhood in Gokulam (கோகுலம்)."
  },
  {
    "id": "krishna-and-kaliya",
    "category": "Krishna · கிருஷ்ணர்",
    "title": "Krishna and Kaliya",
    "summary": "The serpent Kaliya poisons a pool of the Yamuna until Krishna leaps into the water and faces him. Krishna escapes the serpent’s coils and performs Kalinga Narthanam upon his many hoods, then shows mercy by sending Kaliya and his family safely away.",
    "full": {
      "sections": [
        {
          "heading": "Why Kaliya Came to the Yamuna",
          "paragraphs": [
            "Kaliya (காளியன்) was a powerful many-hooded Naga who once lived on Ramanaka Island with other serpents. The serpents regularly set aside an offering for Garuda (கருடன்), the great king of birds. Proud of his venom and strength, Kaliya took the offering for himself.",
            "Garuda came to punish him. Kaliya fought back, but Garuda struck him with a powerful wing. Defeated and afraid, Kaliya fled to a deep pool of the Yamuna River (யமுனை). He knew Garuda would not enter that place because the sage Saubhari had forbidden the bird from harming the creatures living in its waters."
          ]
        },
        {
          "heading": "The Poisoned Pool",
          "paragraphs": [
            "Kaliya remained in the Yamuna with his family. His poison became so strong that the water in the pool seemed to boil. Birds flying over it fell into the water, and the poisonous mist carried from the waves destroyed plants and animals along the shore.",
            "Krishna (கிருஷ்ணர்) saw that the river had been contaminated and decided to remove the serpent so the Yamuna could become safe again."
          ]
        },
        {
          "heading": "Krishna Enters the Water",
          "paragraphs": [
            "Krishna climbed a Kadamba tree beside the poisoned pool. He tightened his clothing, struck his arms together, and jumped into the water. The force of his landing churned the pool and sent waves rushing across the shore.",
            "Kaliya heard the disturbance in his territory and came toward Krishna. The serpent bit him and wrapped his enormous coils tightly around him. The cowherd boys and the cows watched in terror as Krishna appeared motionless in Kaliya’s grasp."
          ]
        },
        {
          "heading": "The People of Vraja Arrive",
          "paragraphs": [
            "Troubling signs appeared in Vraja. Nanda (நந்தகோபர்), Yashoda (யசோதை), and the other cowherds realized that Krishna had gone out without Balarama (பலராமர்), and they hurried to find him. They followed Krishna’s footprints along the cow path to the bank of the Yamuna.",
            "The families found Krishna caught in the serpent’s coils and the animals crying around the pool. They were overcome with fear and grief. Balarama, who knew Krishna’s true power, prevented Nanda and the others from rushing into the dangerous water."
          ]
        },
        {
          "heading": "Kalinga Narthanam",
          "paragraphs": [
            "Seeing the distress of the people who loved him, Krishna expanded his body until Kaliya could no longer hold him. The serpent released his coils, raised his many hoods, and prepared to strike again.",
            "Krishna moved around Kaliya until the serpent grew exhausted. He then sprang onto Kaliya’s broad hoods and began to dance. Whenever one of the serpent’s heads rose defiantly, Krishna pressed it down with his foot.",
            "This divine dance upon Kaliya is remembered in Tamil tradition as Kalinga Narthanam (காளிங்க நர்த்தனம்). Celestial beings celebrated the dance with music, songs, and showers of flowers. At last Kaliya’s strength failed, and he recognized Krishna’s power."
          ]
        },
        {
          "heading": "The Plea for Mercy",
          "paragraphs": [
            "Kaliya’s wives approached Krishna with their children and bowed before him. They accepted that Kaliya had acted wrongly and asked that his life be spared.",
            "Krishna released the exhausted serpent. Kaliya slowly recovered and submitted to Krishna’s decision."
          ]
        },
        {
          "heading": "The Yamuna Is Restored",
          "paragraphs": [
            "Krishna ordered Kaliya to leave the Yamuna with his wives, children, and companions and return to Ramanaka Island. The marks of Krishna’s feet upon Kaliya’s hoods would protect him from Garuda.",
            "Kaliya and his family honored Krishna and departed for the sea. As soon as they left, the Yamuna became free of poison and its water was restored. The people of Vraja rejoiced when Krishna emerged safely, and his family embraced him with relief."
          ]
        }
      ],
      "lesson": {
        "label": "Lessons:",
        "text": "Use strength to protect life and restore what has been harmed. Mercy can follow accountability when wrongdoing ends."
      },
      "source": "Source: Bhagavata Purana, Book 10, Chapters 16–17. This is a child-friendly prose retelling, not a word-for-word translation; no invented dialogue has been added."
    }
  },
  {
    "id": "the-hill-that-became-an-umbrella",
    "category": "Krishna · கிருஷ்ணர்",
    "title": "The Hill That Became an Umbrella",
    "summary": "When Indra sends a devastating storm against the cowherds of Vrindavan, Krishna lifts Govardhana Hill to shelter every family and animal. The seven-day rescue humbles Indra and celebrates Krishna as the protector of cows and community.",
    "full": {
      "sections": [
        {
          "heading": null,
          "paragraphs": [
            "Long ago, Krishna (கிருஷ்ணர்) lived among the cowherds of Vrindavan (பிருந்தாவனம்). His father, Nanda (நந்தகோபர்), led the community. The villagers raised cows, tended their pastures, and depended on the land for their livelihood."
          ]
        },
        {
          "heading": "The Festival for Indra",
          "paragraphs": [
            "One day Krishna noticed preparations for a sacrifice to Indra (இந்திரன்), king of the Devas and god of rain. Krishna asked his father about it. Nanda explained that rain nourished the grass, crops, and forests, so the cowherds honored Indra with offerings.",
            "Krishna questioned this practice. He explained that people should perform their duties faithfully. The cowherds should care for their cows and pastures. He suggested that they should honor Govardhana Hill (கோவர்த்தன மலை) instead. The villagers accepted his suggestion."
          ]
        },
        {
          "heading": "The Worship of Govardhana",
          "paragraphs": [
            "The cowherds prepared rice, milk dishes, sweets, and other food. They made offerings to Govardhana Hill and fed the cows. They decorated their cattle and walked around the mountain in a procession. During the ceremony, Krishna manifested an enormous divine form associated with Govardhana and accepted the offerings. Then the villagers returned home."
          ]
        },
        {
          "heading": "Indra's Anger",
          "paragraphs": [
            "When Indra learned that the cowherds had abandoned his annual sacrifice, he was furious. He summoned the terrible Samvartaka clouds (சம்வர்த்தக மேகங்கள்), associated with the destruction of the world, and ordered them to unleash devastating rain upon Vrindavan.",
            "Thunder roared, lightning flashed, and powerful winds swept across the land. Rain poured down, flooding the ground. Cows and calves suffered in the cold. The frightened villagers approached Krishna for protection."
          ]
        },
        {
          "heading": "Krishna Lifts Govardhana Hill",
          "paragraphs": [
            "Krishna understood that Indra had sent the storm because of the abandoned sacrifice. To protect the villagers, he lifted Govardhana Hill with one hand, holding it on the little finger of his left hand as easily as a child might hold a mushroom.",
            "Krishna instructed the villagers to shelter beneath the mountain with their families, belongings, and cattle. For seven days and seven nights he held it up, without becoming tired, hungry, or thirsty. The villagers and animals remained safe."
          ]
        },
        {
          "heading": "Indra Realizes His Mistake",
          "paragraphs": [
            "Indra was astonished that his storm had failed. Recognizing Krishna's divine power, he withdrew the clouds. The rain stopped, the wind calmed, and the sky cleared.",
            "The villagers emerged with their families and cattle. Once everyone was safe, Krishna returned Govardhana Hill to its original place. The villagers rejoiced and embraced him."
          ]
        },
        {
          "heading": "Indra Asks for Forgiveness",
          "paragraphs": [
            "Indra descended from heaven and approached Krishna privately. He bowed and acknowledged that pride in his position had led him to act wrongly. Krishna explained that he had humbled Indra so that he could recognize his error and instructed him to return to his duties without arrogance."
          ]
        },
        {
          "heading": "Krishna Becomes Govinda",
          "paragraphs": [
            "Surabhi (சுரபி), the divine cow, came to Krishna and praised him as protector of cows. She bathed Krishna with her milk. Indra also performed a ceremonial bathing with sacred water carried by his elephant Airavata (ஐராவதம்). The gods honored Krishna with the name Govinda (கோவிந்தன்). Flowers fell from heaven as the celestial beings celebrated."
          ]
        }
      ],
      "lesson": {
        "label": "Lessons:",
        "text": "Protect those who depend on you. Fulfill your duties. Do not let pride control your actions."
      },
      "source": "Source: Bhagavata Purana, Book 10, Chapters 24–27. This is a prose retelling, not a word-for-word translation; no invented dialogue has been added."
    }
  },
  {
    "id": "the-baby-beneath-the-tulasi",
    "category": "Andal · ஆண்டாள்",
    "title": "The Baby Beneath the Tulasi",
    "summary": "Periyalvar finds a baby girl beneath a Tulasi plant in his Srivilliputhur garden and names her Kodhai. Raised among songs and stories of Vishnu, she grows into the beloved Tamil saint Andal.",
    "full": "In Srivilliputhur (ஸ்ரீவில்லிபுத்தூர்), the devotee Periyalvar (பெரியாழ்வார்) found a baby girl beneath a Tulasi (துளசி) plant in his garden. He lovingly raised her and named her Kodhai (கோதை). She grew up hearing songs and stories about Vishnu (திருமால்) and became known as Andal (ஆண்டாள்). Her life is treasured in Tamil Vaishnava tradition."
  },
  {
    "id": "the-garland-andal-wore",
    "category": "Andal · ஆண்டாள்",
    "title": "The Garland Andal Wore",
    "summary": "Andal secretly tries on the flower garlands her father prepares for Vishnu, imagining herself as the Lord’s bride. Vishnu asks to receive the garlands she has worn, showing that her heartfelt devotion is more precious than an ordinary rule.",
    "full": "Every day Periyalvar (பெரியாழ்வார்) prepared flower garlands for Vishnu (திருமால்). Young Andal (ஆண்டாள்) secretly tried them on first, imagining herself as the Lord’s bride. Her father was upset when he discovered this, thinking the garland could no longer be offered. But Vishnu appeared in a dream and asked for the garland Andal had worn. Her loving devotion became more precious than the usual rule."
  },
  {
    "id": "songs-in-the-month-of-margazhi",
    "category": "Andal · ஆண்டாள்",
    "title": "Songs in the Month of Margazhi",
    "summary": "In the thirty verses of the Tiruppavai, Andal calls her companions to rise early in Margazhi and worship Krishna together. Her enduring songs combine personal devotion with hopes for the well-being of the whole community.",
    "full": "Andal (ஆண்டாள்) imagined herself among friends waking early to worship Krishna (கிருஷ்ணர்) in the cool month of Margazhi (மார்கழி). Her thirty verses, the Tiruppavai (திருப்பாவை), call companions to join in prayer and wish for the well-being of the whole community. She also composed the Nachiyar Tirumozhi (நாச்சியார் திருமொழி), expressing her love and longing for Vishnu. Her songs are still sung today."
  },
  {
    "id": "andals-wedding-dream",
    "category": "Andal · ஆண்டாள்",
    "title": "Andal’s Wedding Dream",
    "summary": "Andal describes a vivid dream of her wedding to Vishnu, filled with processions, flowers, music, family, and celebration. Her Varanam Ayiram verses continue to hold a cherished place in Tamil wedding traditions.",
    "full": "In the celebrated Varanam Ayiram (வாரணம் ஆயிரம்) verses, Andal (ஆண்டாள்) tells a friend about a wonderful dream of her wedding to Vishnu (திருமால்). She imagines grand processions, festive decorations, and joyful ceremonies. The verses remain part of many Tamil wedding traditions. The dream reveals Andal’s devotion through vivid images a child can picture: flowers, music, family, and celebration."
  },
  {
    "id": "andal-and-the-parrot",
    "category": "Andal · ஆண்டாள்",
    "title": "Andal and the Parrot",
    "summary": "Andal is often pictured holding a green parrot, an image lovingly preserved in temple traditions. Families sometimes imagine the bird listening as she sings of Krishna, turning a familiar symbol into a gentle storytelling companion.",
    "full": "Images of Andal (ஆண்டாள்) often show her holding a green parrot (கிளி). In some temples a decorative parrot is lovingly prepared for her. Families sometimes imagine Andal singing to the bird about Krishna (கிருஷ்ணர்), with the parrot listening close by. That imagined conversation is a gentle storytelling addition, while the parrot itself is a well-known part of her iconography."
  },
  {
    "id": "the-journey-to-srirangam",
    "category": "Andal · ஆண்டாள்",
    "title": "The Journey to Srirangam",
    "summary": "Andal wishes to marry only Ranganatha, the form of Vishnu worshipped at Srirangam. Temple tradition remembers her joyful journey there and her final union with the Lord she loved throughout her life.",
    "full": "Andal (ஆண்டாள்) wished to marry only Ranganatha (ரங்கநாதர்), the form of Vishnu (திருமால்) worshipped at Srirangam (ஸ்ரீரங்கம்). According to temple tradition, Ranganatha called for her to be brought there. Periyalvar (பெரியாழ்வார்) accompanied her in a joyful procession. At the temple, Andal is said to have united with the Lord. The story celebrates a devotion that shaped her whole life."
  },
  {
    "id": "the-garland-tradition-lives-on",
    "category": "Andal · ஆண்டாள்",
    "title": "The Garland Tradition Lives On",
    "summary": "The memory of Andal’s devotion still travels through flower garlands ceremonially sent from Srivilliputhur to Vishnu temples. Each journey recalls how a young girl’s love transformed an ordinary garland into an extraordinary offering.",
    "full": "The story of Andal (ஆண்டாள்) wearing garlands for Vishnu (திருமால்) is remembered in living temple customs. Garlands associated with Srivilliputhur (ஸ்ரீவில்லிபுத்தூர்) are ceremonially sent for special worship, including to other Vishnu temples. Children can imagine the flowers traveling from one sacred place to another, carrying the memory of a girl whose love made an ordinary garland extraordinary."
  },
  {
    "id": "the-music-of-the-veena",
    "category": "Saraswati · சரஸ்வதி",
    "title": "The Music of the Veena",
    "summary": "In this gentle teaching tale, Saraswati plays her veena until its beautiful music quiets an argument. Everyone pauses to listen and remembers the value of kind speech, harmony, and learning from one another.",
    "full": "Saraswati (சரஸ்வதி) is the goddess of learning, language, and music. She is often pictured holding a Veena (வீணை). In a gentle teaching story, she plays a melody so beautiful that everyone stops arguing and listens. The music helps them remember to speak kindly and learn from one another. This is an illustrative tale inspired by her symbols, not a fixed classical episode."
  },
  {
    "id": "the-wise-swan",
    "category": "Saraswati · சரஸ்வதி",
    "title": "The Wise Swan",
    "summary": "Saraswati’s Hamsa is traditionally said to distinguish milk from water. The image encourages young learners to examine what they hear, recognize what is valuable, and choose truth wisely.",
    "full": "The Hamsa (அன்னப்பறவை), often pictured beside Saraswati (சரஸ்வதி), is traditionally associated with the ability to distinguish milk from water. Whether taken literally or symbolically, the image teaches children to look carefully and choose wisely. Just as the bird selects what is valuable, a learner should seek truth rather than believe everything immediately. This is a traditional symbol explained as a short lesson."
  },
  {
    "id": "a-day-for-books-and-music",
    "category": "Saraswati · சரஸ்வதி",
    "title": "A Day for Books and Music",
    "summary": "During Saraswati Puja, families honor books, instruments, and the tools through which they learn and create. Vijayadashami then becomes an auspicious day for children to begin a new subject, art, or practice.",
    "full": "During Saraswati Puja (சரஸ்வதி பூஜை), especially in Tamil Navaratri (நவராத்திரி) celebrations, families place books, instruments, and tools of learning before Saraswati (சரஸ்வதி). On Vijayadashami (விஜயதசமி), children may begin a new subject or practice. Another festival, Vasant Panchami (வசந்த பஞ்சமி), honors Saraswati in many parts of India. These customs remind children that learning deserves gratitude and care."
  },
  {
    "id": "the-river-of-knowledge",
    "category": "Saraswati · சரஸ்வதி",
    "title": "The River of Knowledge",
    "summary": "Saraswati’s connection with an ancient sacred river offers a picture of knowledge as flowing water. Learning nourishes people, passes from teacher to student, and helps fresh ideas grow.",
    "full": "Saraswati (சரஸ்வதி) is also associated with an ancient sacred river, the Sarasvati River (சரஸ்வதி நதி). Families may compare knowledge to flowing water: it nourishes people, moves from teacher to student, and helps new ideas grow. When children see pictures of Saraswati near water or a lotus, they can remember this connection. This is a symbolic explanation rather than a single mythological adventure."
  },
  {
    "id": "light-against-ignorance",
    "category": "Saraswati · சரஸ்வதி",
    "title": "Light Against Ignorance",
    "summary": "When mysterious forest sounds frighten a village, curious children choose to listen, ask questions, and investigate. They discover harmless animals rather than monsters and learn how knowledge can replace fear with understanding.",
    "full": "In a teaching tale inspired by Saraswati (சரஸ்வதி), a village grows frightened because nobody understands the strange sounds in a dark forest. Instead of running away, the children learn to listen, ask questions, and investigate. They discover harmless animals making the noises. They thank Saraswati for the gift of curiosity. This is an original story, not an established legend about a named demon."
  }
];
