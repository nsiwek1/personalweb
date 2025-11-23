import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Utensils, Loader2 } from 'lucide-react';

interface BeliReview {
  restaurant: string;
  price: string;
  cuisine: string;
  location: string;
}

export default function Personal() {
  const [reviews, setReviews] = useState<BeliReview[]>([]);
  const [selectedReview, setSelectedReview] = useState<BeliReview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load reviews from JSON file
    fetch('/beli_reviews.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load reviews');
        }
        return response.json();
      })
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading reviews:', error);
        setError('Failed to load restaurant reviews. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-accent" />
            <p className="text-lg text-secondary">Loading restaurants...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-lg text-red-500 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-accent text-white rounded-full hover:bg-accentHover transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-accent font-semibold mb-2 tracking-wide uppercase text-sm">
            Food Adventures
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            My Restaurant Rankings
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Exploring culinary experiences, one restaurant at a time
          </p>
        </div>
        
        {reviews.length === 0 ? (
          <div className="text-center text-secondary">
            <p className="text-base">No restaurants found.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-white rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedReview(review)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-base font-bold text-accent">
                      #{index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-all duration-300">
                      {review.restaurant}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-secondary">
                    <div className="flex items-center gap-2">
                      <Utensils className="w-5 h-5 text-accent" />
                      <span className="text-sm">{review.cuisine}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span className="text-sm">{review.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Modal for detailed view */}
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedReview(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 border border-border"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">
                  {selectedReview.restaurant}
                </h2>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="text-secondary hover:text-primary transition-colors duration-300 text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-secondary">
                <div className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-accent" />
                  <span>{selectedReview.cuisine}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>{selectedReview.location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 