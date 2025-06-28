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
      <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-base sm:text-lg text-primary">Loading restaurants...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-base sm:text-lg text-red-400 mb-4">{error}</p>
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
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 sm:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
            My Restaurant Rankings
          </h1>
          <div className="h-[1px] w-full sm:w-auto sm:flex-1 bg-primary/10"></div>
        </div>
        
        {reviews.length === 0 ? (
          <div className="text-center text-primary/70">
            <p className="text-base sm:text-lg">No restaurants found.</p>
          </div>
        ) : (
          <div className="grid gap-3 sm:gap-4">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-primary/5 rounded-lg p-3 sm:p-4 md:p-6 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedReview(review)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg font-bold text-primary">
                      #{index + 1}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-primary group-hover:text-secondary transition-all duration-300">
                      {review.restaurant}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-primary/70">
                    <div className="flex items-center gap-1.5">
                      <Utensils className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">{review.cuisine}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">{review.location}</span>
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
              className="bg-background rounded-lg p-4 sm:p-6 md:p-8 max-w-2xl w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-primary">
                  {selectedReview.restaurant}
                </h2>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="text-primary/70 hover:text-primary transition-colors duration-300"
                >
                  ✕
                </button>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-primary/70">
                <div className="flex items-center gap-1.5">
                  <Utensils className="w-5 h-5" />
                  <span className="text-xs sm:text-sm">{selectedReview.cuisine}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs sm:text-sm">{selectedReview.location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 