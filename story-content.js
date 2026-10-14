// Card summaries live separately from full stories so either can be revised
// without changing the other. Every title in stories.js must have one summary.
const STORY_SUMMARIES = {
  "The Elephant-Headed Boy": "Ganesha faithfully guards Parvati’s doorway, even when Shiva demands to enter. After a terrible misunderstanding, Shiva restores the boy with an elephant’s head, and Ganesha becomes the beloved guardian of new beginnings.",
  "The Wisdom Fruit": "Ganesha and Murugan are challenged to race around the world for a fruit of wisdom. While Murugan speeds away on his peacock, Ganesha recognizes that his parents are his whole world and wins through insight rather than speed.",
  "Ganesha and the Moon": "After the Moon mocks Ganesha for falling from his mouse, Ganesha places a curse upon him and later softens it. The festival tradition connects that curse to Krishna’s false accusation over the Syamantaka jewel and teaches children not to ridicule or accuse others carelessly.",
  "The Pillaiyar Ants": "Tiny black ants sharing grains of rice remind Parvati that even the smallest lives deserve kindness. This Tamil folk tradition affectionately links the little creatures with Pillaiyar, another name for Ganesha.",
  "The Churning of the Ocean of Milk": "The weakened Devas and the Asuras work together to churn the Ocean of Milk in search of the nectar of immortality. With Vishnu supporting the mountain as Kurma and Shiva containing a deadly poison, the great effort brings forth Lakshmi, Dhanvantari, and many treasures.",
  "Mohini, the Clever Disguise": "When the Asuras seize the nectar of immortality, Vishnu takes the enchanting form of Mohini to recover it for the Devas. Rahu nearly succeeds in drinking some, but the Sun and Moon recognize his disguise just in time.",
  "The Butter Thief": "Young Krishna invents playful ways to reach the butter pots that Yashoda hangs high above him. His affectionate mischief—and his habit of sharing the butter with friends—makes him Gokulam’s beloved little butter thief.",
  "Krishna and Kaliya": "Krishna leaps into the poisoned Yamuna and subdues the many-headed serpent Kaliya by dancing upon his heads. He spares the defeated serpent and sends him away, restoring the river for the people and animals.",
  "The Hill That Became an Umbrella": "When Indra sends a devastating storm against the cowherds of Vrindavan, Krishna lifts Govardhana Hill to shelter every family and animal. The seven-day rescue humbles Indra and celebrates Krishna as the protector of cows and community.",
  "Lakshmi Rises from the Ocean": "As the Ocean of Milk is churned, Lakshmi rises from the waters holding a lotus and chooses Vishnu as her companion. Her joyful arrival represents prosperity, well-being, and good fortune.",
  "A Guest and a Bowl of Rice": "A family with very little food still welcomes a mysterious guest and shares its rice. The guest is Lakshmi, who blesses their generosity and shows that true abundance begins with kindness.",
  "The Lotus Lesson": "Lakshmi’s lotus grows clean and beautiful even though it rises from muddy water. Its image teaches children that difficult circumstances do not prevent them from becoming kind, generous, and good.",
  "Kumbhakarna’s Mixed-Up Wish": "Kumbhakarna performs great penance but, in a popular telling, Saraswati tangles his speech as he asks Brahma for a boon. Instead of gaining Indra’s throne, the giant receives an extraordinary life of long, deep sleep.",
  "The Sleeping Giant Goes to Battle": "Ravana’s soldiers make an enormous racket to wake Kumbhakarna and send him into battle against Rama. Though the giant knows Ravana was wrong to take Sita, he chooses family loyalty and is forced to face the consequences of that choice.",
  "Hanuman in Ravana’s Court": "After finding Sita in Lanka, Hanuman boldly confronts Ravana and urges him to return her. Ravana sets Hanuman’s tail ablaze, but Hanuman escapes, burns parts of Lanka, and carries hopeful news back to Rama.",
  "Durga and Mahishasura": "Protected from defeat by any god or man, the shape-shifting Mahishasura conquers heaven and drives out the Devas. Their combined divine energy creates Durga, who rides into battle on a lion and restores justice after a fierce struggle.",
  "Durga and Chamunda": "When the fierce Asuras Chanda and Munda challenge Durga, the powerful goddess Kali emerges from Durga’s forehead. Kali defeats them and receives the name Chamunda, revealing the Divine Mother’s fearsome power to protect the world.",
  "Why Families Celebrate Navaratri": "Navaratri fills nine nights with lamps, songs, prayer, and, in many Tamil homes, a Golu display of dolls. Families honor Durga for strength, Lakshmi for prosperity, and Saraswati for learning.",
  "The Child Who Prayed for Courage": "A child who prays to Durga discovers that courage is not the absence of fear but the willingness to speak when others are in danger. One small voice helps a cruel ruler recognize the harm he has caused.",
  "The Baby Beneath the Tulasi": "Periyalvar finds a baby girl beneath a Tulasi plant in his Srivilliputhur garden and names her Kodhai. Raised among songs and stories of Vishnu, she grows into the beloved Tamil saint Andal.",
  "The Garland Andal Wore": "Andal secretly tries on the flower garlands her father prepares for Vishnu, imagining herself as the Lord’s bride. Vishnu asks to receive the garlands she has worn, showing that her heartfelt devotion is more precious than an ordinary rule.",
  "Songs in the Month of Margazhi": "In the thirty verses of the Tiruppavai, Andal calls her companions to rise early in Margazhi and worship Krishna together. Her enduring songs combine personal devotion with hopes for the well-being of the whole community.",
  "Andal’s Wedding Dream": "Andal describes a vivid dream of her wedding to Vishnu, filled with processions, flowers, music, family, and celebration. Her Varanam Ayiram verses continue to hold a cherished place in Tamil wedding traditions.",
  "Andal and the Parrot": "Andal is often pictured holding a green parrot, an image lovingly preserved in temple traditions. Families sometimes imagine the bird listening as she sings of Krishna, turning a familiar symbol into a gentle storytelling companion.",
  "The Journey to Srirangam": "Andal wishes to marry only Ranganatha, the form of Vishnu worshipped at Srirangam. Temple tradition remembers her joyful journey there and her final union with the Lord she loved throughout her life.",
  "The Garland Tradition Lives On": "The memory of Andal’s devotion still travels through flower garlands ceremonially sent from Srivilliputhur to Vishnu temples. Each journey recalls how a young girl’s love transformed an ordinary garland into an extraordinary offering.",
  "Garuda’s Birth": "Garuda emerges from Vinata’s egg as a magnificent bird of dazzling strength and speed. His remarkable birth begins the Mahabharata story of a hero who will become Vishnu’s devoted mount and companion.",
  "Garuda Frees His Mother": "After deception leaves Vinata enslaved to Kadru and the Nagas, Garuda vows to win his mother’s freedom. The serpents demand the nectar of immortality, sending him on a dangerous and selfless quest.",
  "The Dangerous Journey for Nectar": "To obtain the nectar that will free his mother, Garuda passes through fire, a deadly spinning wheel, fierce serpent guards, and even the resistance of Indra. He carries the treasure away without drinking it, proving that devotion—not personal gain—drives his courage.",
  "Garuda and Vishnu": "Vishnu admires Garuda’s strength and selflessness and welcomes him as his mount and companion. Garuda secures Vinata’s freedom, while Indra retrieves the untouched nectar before the Nagas can drink it.",
  "The Music of the Veena": "In this gentle teaching tale, Saraswati plays her veena until its beautiful music quiets an argument. Everyone pauses to listen and remembers the value of kind speech, harmony, and learning from one another.",
  "The Wise Swan": "Saraswati’s Hamsa is traditionally said to distinguish milk from water. The image encourages young learners to examine what they hear, recognize what is valuable, and choose truth wisely.",
  "A Day for Books and Music": "During Saraswati Puja, families honor books, instruments, and the tools through which they learn and create. Vijayadashami then becomes an auspicious day for children to begin a new subject, art, or practice.",
  "The River of Knowledge": "Saraswati’s connection with an ancient sacred river offers a picture of knowledge as flowing water. Learning nourishes people, passes from teacher to student, and helps fresh ideas grow.",
  "Light Against Ignorance": "When mysterious forest sounds frighten a village, curious children choose to listen, ask questions, and investigate. They discover harmless animals rather than monsters and learn how knowledge can replace fear with understanding."
};

// Expanded stories use sections so long-form text can have readable headings,
// lessons, and source notes. Stories without an entry here retain their original
// full text from stories.js.
const EXPANDED_STORIES = {
  "Durga and Mahishasura": {
    sections: [
      {
        heading: null,
        paragraphs: [
          "Long ago, there lived a powerful Asura named Mahishasura (மகிஷாசுரன்). He could change his shape, appearing sometimes as a man and sometimes as a mighty buffalo. Mahishasura wanted to become the most powerful ruler in the universe.",
          "He performed penance to Lord Brahma (பிரம்மா) for many years. When Brahma appeared and offered him a boon, Mahishasura asked that no god or man should be able to defeat him. Brahma granted the boon. Mahishasura was delighted, believing himself unbeatable. But he had forgotten to ask for protection from women."
        ]
      },
      {
        heading: "The Gods Are Defeated",
        paragraphs: [
          "With his new powers, Mahishasura gathered an enormous army and marched into heaven. He challenged Indra (இந்திரன்), king of the Devas, and defeated him. The Devas were driven from heaven and went to Brahma, Vishnu (விஷ்ணு), and Shiva (சிவபெருமான்) for help. The three great gods knew that Mahishasura's boon protected him from gods and men, but not from a goddess."
        ]
      },
      {
        heading: "The Birth of Durga",
        paragraphs: [
          "A brilliant light shone from Vishnu, Shiva, Brahma, and the other gods. Their divine energies came together, brighter than a thousand suns. From this light appeared Durga (துர்க்கை அம்மன்), a radiant goddess with many arms and extraordinary courage.",
          "The gods gave Durga their weapons. Shiva gave her his trident; Vishnu gave her his discus, the Sudarshana Chakra (சுதர்சன சக்கரம்); Indra gave her his thunderbolt; and other gods gave her a sword, bow, arrows, and other weapons. Durga rode a magnificent lion into battle."
        ]
      },
      {
        heading: "The Great Battle",
        paragraphs: [
          "Mahishasura sent his strongest warriors against Durga, but she defeated them. Finally, Mahishasura himself came forward. He took the form of an enormous buffalo and charged, shaking the ground beneath his hooves. Durga fought him with her divine weapons.",
          "Mahishasura kept changing form. He appeared as a lion, a man carrying a sword, and an elephant before returning to his buffalo shape. Durga met each attack. At last, she pinned him down and defeated him with her trident."
        ]
      },
      {
        heading: "The Victory",
        paragraphs: [
          "The Devas rejoiced. Flowers fell from heaven, and Indra and the other gods were able to return to their places. Durga became known as Mahishasuramardini (மகிஷாசுரமர்த்தினி), the goddess who defeated Mahishasura.",
          "During Navaratri (நவராத்திரி), many families celebrate the goddess and her victory. The tenth day, Vijayadashami (விஜயதசமி), is associated with victory and new beginnings."
        ]
      }
    ],
    lesson: { label: "Lesson:", text: "Strength is best used to protect others and stand up for what is right." }
  },

  "Ganesha and the Moon": {
    sections: [
      {
        heading: "Ganesha Falls from His Mouse",
        paragraphs: [
          "One evening, Ganesha (விநாயகர்) had enjoyed a wonderful feast of modakams and kozhukattais. His belly was full as he rode home on his little mouse, Mushika (மூஷிகன்).",
          "Suddenly a snake appeared. The mouse was startled, and Ganesha fell to the ground. In one popular version, his belly burst open and the sweets spilled out. Ganesha gathered everything and tied a snake around his belly.",
          "High in the sky, Chandra (சந்திரன்), the Moon god, saw the fall and laughed at Ganesha's appearance. Ganesha was angry that Chandra had mocked him."
        ]
      },
      {
        heading: "The Curse",
        paragraphs: [
          "Ganesha cursed the Moon. In some versions, the curse caused the Moon to lose its light and disappear. The world grew dark, and the gods were worried. Chandra regretted his behavior, bowed to Ganesha, and asked forgiveness.",
          "Ganesha softened the curse. One tradition connects this with the Moon's monthly waxing and waning. Another says that someone who looks at the Moon on Vinayaka Chaturthi (விநாயகர் சதுர்த்தி) may suffer a false accusation—being blamed for something they did not do. This is the origin of the custom, observed in some families, of avoiding the Moon that night."
        ]
      },
      {
        heading: "Krishna and the Syamantaka Jewel",
        paragraphs: [
          "A wealthy man named Satrajit (சத்ராஜித்) was devoted to Surya (சூரியன்), the Sun god. Surya gave him a remarkable jewel called the Syamantaka Mani (சியமந்தக மணி). The jewel was said to produce gold and bring prosperity when kept by a righteous person.",
          "Krishna (கிருஷ்ணர்) suggested that Satrajit give the jewel to Ugrasena (உக்கிரசேனன்), the king of Dwaraka, for the good of the kingdom. Satrajit refused.",
          "One day, Satrajit's brother Prasena (பிரசேனன்) wore the jewel while hunting. A lion killed Prasena and carried off the jewel. Then the mighty bear Jambavan (ஜாம்பவான்) defeated the lion and took the jewel to his cave, where he gave it to his child as a toy.",
          "Nobody in Dwaraka knew what had happened. When Prasena failed to return, people suspected Krishna of taking the jewel. Krishna was falsely accused of theft."
        ]
      },
      {
        heading: "Krishna Finds the Truth",
        paragraphs: [
          "Krishna followed Prasena's tracks into the forest. He found evidence of the lion's attack, then followed the trail to Jambavan's cave. Jambavan did not recognize Krishna, and they fought for many days. At last Jambavan recognized Krishna as the Lord he had served in the form of Rama. He returned the jewel.",
          "Krishna brought the Syamantaka jewel back to Dwaraka and explained what had happened. Satrajit apologized, and Krishna's innocence was established."
        ]
      },
      {
        heading: "The Connection and Remedy",
        paragraphs: [
          "In a popular Ganesh Chaturthi tradition, Krishna had accidentally looked at the Moon on the forbidden night. His false accusation over the Syamantaka jewel is connected to Ganesha's curse. A customary remedy for accidentally seeing the Moon is to hear or recite the story of Krishna and the Syamantaka jewel. Some traditions also prescribe a Sanskrit verse about the jewel.",
          "The Syamantaka episode appears in the Bhagavata Purana (Book 10, Chapters 56–57) and the Vishnu Purana. Not every scriptural telling explicitly connects it to Ganesha's Moon curse; that connection belongs to a broader festival storytelling tradition."
        ]
      }
    ],
    lesson: { label: "Lessons:", text: "Do not mock others. Do not accuse someone without evidence. Search for the truth." }
  },

  "The Hill That Became an Umbrella": {
    sections: [
      {
        heading: null,
        paragraphs: [
          "Long ago, Krishna (கிருஷ்ணர்) lived among the cowherds of Vrindavan (பிருந்தாவனம்). His father, Nanda (நந்தகோபர்), led the community. The villagers raised cows, tended their pastures, and depended on the land for their livelihood."
        ]
      },
      {
        heading: "The Festival for Indra",
        paragraphs: [
          "One day Krishna noticed preparations for a sacrifice to Indra (இந்திரன்), king of the Devas and god of rain. Krishna asked his father about it. Nanda explained that rain nourished the grass, crops, and forests, so the cowherds honored Indra with offerings.",
          "Krishna questioned this practice. He explained that people should perform their duties faithfully. The cowherds should care for their cows and pastures. He proposed honoring the cows, the Brahmins, and Govardhana Hill (கோவர்த்தன மலை) instead. The villagers accepted his suggestion."
        ]
      },
      {
        heading: "The Worship of Govardhana",
        paragraphs: [
          "The cowherds prepared rice, milk dishes, sweets, and other food. They made offerings to Govardhana Hill, honored the Brahmins, and fed the cows. They decorated their cattle and walked around the mountain in a procession. During the ceremony, Krishna manifested an enormous divine form associated with Govardhana and accepted the offerings. Then the villagers returned home."
        ]
      },
      {
        heading: "Indra's Anger",
        paragraphs: [
          "When Indra learned that the cowherds had abandoned his annual sacrifice, he was furious. He summoned the terrible Samvartaka clouds (சம்வர்த்தக மேகங்கள்), associated with the destruction of the world, and ordered them to unleash devastating rain upon Vrindavan.",
          "Thunder roared, lightning flashed, and powerful winds swept across the land. Rain poured down, flooding the ground. Cows and calves suffered in the cold. The frightened villagers approached Krishna for protection."
        ]
      },
      {
        heading: "Krishna Lifts Govardhana Hill",
        paragraphs: [
          "Krishna understood that Indra had sent the storm because of the abandoned sacrifice. To protect the villagers, he lifted Govardhana Hill with one hand, holding it on the little finger of his left hand as easily as a child might hold a mushroom.",
          "Krishna instructed the villagers to shelter beneath the mountain with their families, belongings, and cattle. For seven days and seven nights he held it up, without becoming tired, hungry, or thirsty. The villagers and animals remained safe."
        ]
      },
      {
        heading: "Indra Realizes His Mistake",
        paragraphs: [
          "Indra was astonished that his storm had failed. Recognizing Krishna's divine power, he withdrew the clouds. The rain stopped, the wind calmed, and the sky cleared.",
          "The villagers emerged with their families and cattle. Once everyone was safe, Krishna returned Govardhana Hill to its original place. The villagers rejoiced and embraced him."
        ]
      },
      {
        heading: "Indra Asks for Forgiveness",
        paragraphs: [
          "Indra descended from heaven and approached Krishna privately. He bowed and acknowledged that pride in his position had led him to act wrongly. Krishna explained that he had humbled Indra so that he could recognize his error and instructed him to return to his duties without arrogance."
        ]
      },
      {
        heading: "Krishna Becomes Govinda",
        paragraphs: [
          "Surabhi (சுரபி), the divine cow, came to Krishna and praised him as protector of cows. She bathed Krishna with her milk. Indra also performed a ceremonial bathing with sacred water carried by his elephant Airavata (ஐராவதம்). The gods honored Krishna with the name Govinda (கோவிந்தன்). Flowers fell from heaven as the celestial beings celebrated."
        ]
      }
    ],
    lesson: { label: "Lessons:", text: "Protect those who depend on you. Fulfill your duties. Do not let pride control your actions." },
    source: "Source: Bhagavata Purana, Book 10, Chapters 24–27. This is a prose retelling, not a word-for-word translation; no invented dialogue has been added."
  }
};
