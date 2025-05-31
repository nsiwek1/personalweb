import React, { useState, useEffect } from 'react';

const HarryPotterQuote: React.FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.potterdb.com/v1/quotes');
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          const randomQuote = data.data[Math.floor(Math.random() * data.data.length)];
          setQuote(randomQuote.attributes.content);
          setAuthor(randomQuote.attributes.author || 'Harry Potter');
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
        // Expanded fallback quotes if API fails
        const fallbackQuotes = [
          { quote: "It does not do to dwell on dreams and forget to live.", author: "Albus Dumbledore" },
          { quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.", author: "Albus Dumbledore" },
          { quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.", author: "Albus Dumbledore" },
          { quote: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.", author: "Albus Dumbledore" },
          { quote: "We've all got both light and dark inside us. What matters is the part we choose to act on.", author: "Sirius Black" },
          { quote: "I solemnly swear that I am up to no good.", author: "Harry Potter" },
          { quote: "After all this time? Always.", author: "Severus Snape" },
          { quote: "The ones that love us never really leave us.", author: "Sirius Black" },
          { quote: "It is our choices that show what we truly are, far more than our abilities.", author: "Albus Dumbledore" },
          { quote: "To the well-organized mind, death is but the next great adventure.", author: "Albus Dumbledore" },
          { quote: "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?", author: "Albus Dumbledore" },
          { quote: "I am what I am, an' I'm not ashamed.", author: "Rubeus Hagrid" },
          { quote: "Books! And cleverness! There are more important things — friendship and bravery.", author: "Hermione Granger" },
          { quote: "It matters not what someone is born, but what they grow to be.", author: "Albus Dumbledore" },
          { quote: "The best of us must sometimes eat our words.", author: "Albus Dumbledore" },
          { quote: "Fear of a name increases fear of the thing itself.", author: "Hermione Granger" },
          { quote: "We are only as strong as we are united, as weak as we are divided.", author: "Albus Dumbledore" },
          { quote: "Numbing the pain for a while will make it worse when you finally feel it.", author: "Albus Dumbledore" },
          { quote: "Just because you have the emotional range of a teaspoon doesn't mean we all have.", author: "Hermione Granger" },
          { quote: "Every human life is worth the same, and worth saving.", author: "Kingsley Shacklebolt" },
          { quote: "We've all got both light and dark inside us. What matters is the part we choose to act on.", author: "Sirius Black" },
          { quote: "Things we lose have a way of coming back to us in the end, if not always in the way we expect.", author: "Luna Lovegood" },
          { quote: "Wit beyond measure is man's greatest treasure.", author: "Luna Lovegood" },
          { quote: "You're a wizard, Harry.", author: "Rubeus Hagrid" },
          { quote: "Dobby is free.", author: "Dobby" },
          { quote: "Mischief Managed.", author: "Harry Potter" },
          { quote: "I am not worried, Harry. I am with you.", author: "Albus Dumbledore" },
          { quote: "Do not pity the dead, Harry. Pity the living, and above all, those who live without love.", author: "Albus Dumbledore" },
          { quote: "You sort of start thinking anything's possible if you've got enough nerve.", author: "Ginny Weasley" },
          { quote: "The world isn't split into good people and Death Eaters.", author: "Sirius Black" }
        ];
        const randomFallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        setQuote(randomFallback.quote);
        setAuthor(randomFallback.author);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="mt-12 p-6 rounded-lg bg-primary/5">
      <p className="text-lg text-primary/70 mb-4">
        Fun fact about me: Harry Potter is my favorite childhood book! Here is a random quote from the series:
      </p>
      <div className="italic text-primary/60">
        "{quote}" - {author}
      </div>
    </div>
  );
};

export default HarryPotterQuote; 