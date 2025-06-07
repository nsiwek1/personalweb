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
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-xl text-primary">Loading restaurants...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-xl text-red-400 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
            My top 20 restaurants
          </h1>
          <div className="h-[1px] flex-1 bg-primary/10"></div>
        </div>
        
        {reviews.length === 0 ? (
          <div className="text-center text-primary/70">
            <p className="text-xl">No restaurants found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-primary/5 rounded-[8px] p-4 sm:p-6 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedReview(review)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-primary">
                      #{index + 1}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary group-hover:text-secondary transition-all duration-300">
                      {review.restaurant}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-primary/70">
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4" />
                      <span className="text-sm sm:text-base">{review.cuisine}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm sm:text-base">{review.location}</span>
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
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedReview(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-background rounded-[8px] p-6 sm:p-8 max-w-2xl w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                  {selectedReview.restaurant}
                </h2>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="text-primary/70 hover:text-primary transition-colors duration-300"
                >
                  ✕
                </button>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-primary/70">
                <div className="flex items-center gap-2">
                  <Utensils className="w-5 h-5" />
                  <span className="text-base sm:text-lg">{selectedReview.cuisine}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-base sm:text-lg">{selectedReview.location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 