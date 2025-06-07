from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
import time
import json

def scroll_to_bottom(driver):
    # Get scroll height
    last_height = driver.execute_script("return document.body.scrollHeight")
    
    while True:
        # Scroll down to bottom
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        
        # Wait to load page
        time.sleep(2)
        
        # Calculate new scroll height and compare with last scroll height
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            break
        last_height = new_height

def scrape_beli_reviews():
    # Set up Chrome options
    chrome_options = Options()
    # chrome_options.add_argument('--headless')  # Commented out to see what's happening
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    chrome_options.add_argument('--window-size=1920,1080')

    # Initialize the Chrome driver
    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        # Navigate to the Beli profile page
        url = "https://app.beliapp.com/lists/nsiwek"
        print(f"Navigating to {url}")
        driver.get(url)
        
        # Wait for the page to load
        time.sleep(10)  # Increased wait time
        
        # Print page title and URL for debugging
        print(f"Page title: {driver.title}")
        print(f"Current URL: {driver.current_url}")
        
        # Check if we need to log in
        if "login" in driver.current_url.lower():
            print("Login required. Please log in manually in the browser window.")
            input("Press Enter after you've logged in...")
        
        # Wait for the content to load
        wait = WebDriverWait(driver, 20)  # Increased timeout
        
        try:
            # Scroll to load all content
            print("Scrolling to load all content...")
            scroll_to_bottom(driver)
            time.sleep(2)  # Wait for any lazy-loaded content
            
            # Find all restaurant containers
            print("Looking for restaurant containers...")
            restaurant_containers = wait.until(
                EC.presence_of_all_elements_located((By.CSS_SELECTOR, "ion-item"))
            )
            print(f"Found {len(restaurant_containers)} restaurant containers")
            
            reviews = []
            # Get top 20 restaurants
            for i, container in enumerate(restaurant_containers[:20], 1):
                try:
                    print(f"\nProcessing restaurant {i}:")
                    
                    # Scroll the container into view
                    driver.execute_script("arguments[0].scrollIntoView(true);", container)
                    time.sleep(0.5)  # Wait for any animations
                    
                    # Get the restaurant name
                    try:
                        name_element = container.find_element(By.CSS_SELECTOR, "p.text-item-title")
                        name = name_element.text.split('.', 1)[1].strip() if '.' in name_element.text else name_element.text.strip()
                    except:
                        name = container.text.split('\n')[0].strip()
                    print(f"Found name: {name}")
                    
                    # Get all subtitle elements
                    subtitle_elements = container.find_elements(By.CSS_SELECTOR, "p.text-item-subtitle")
                    
                    # Process subtitle elements
                    price = ""
                    cuisine = ""
                    location = ""
                    
                    if len(subtitle_elements) >= 1:
                        # First subtitle contains price and cuisine
                        cuisine_info = subtitle_elements[0].text
                        if '|' in cuisine_info:
                            price = cuisine_info.split('|')[0].strip()
                            cuisine = cuisine_info.split('|')[1].strip()
                    
                    if len(subtitle_elements) >= 2:
                        # Second subtitle contains location
                        location = subtitle_elements[1].text.strip()
                    
                    print(f"Found price: {price}, cuisine: {cuisine}")
                    print(f"Found location: {location}")
                    
                    review = {
                        "restaurant": name,
                        "price": price,
                        "cuisine": cuisine,
                        "location": location
                    }
                    reviews.append(review)
                    print(f"Successfully added review for {name}")
                except Exception as e:
                    print(f"Error scraping restaurant {i}: {str(e)}")
                    continue
            
            if reviews:
                # Save to JSON file
                print(f"\nSaving {len(reviews)} reviews to beli_reviews.json")
                with open('beli_reviews.json', 'w') as f:
                    json.dump(reviews, f, indent=2)
                print("File saved successfully")
            else:
                print("No reviews were collected")
                
            return reviews
            
        except Exception as e:
            print(f"Error finding restaurant elements: {str(e)}")
            print("Page source preview:")
            print(driver.page_source[:2000])  # Print more of the page source
            return []
            
    except Exception as e:
        print(f"Main error: {str(e)}")
        return []
        
    finally:
        print("Closing browser")
        driver.quit()

if __name__ == "__main__":
    print("Starting Beli review scraper...")
    reviews = scrape_beli_reviews()
    print(f"Scraping completed. Found {len(reviews)} reviews.") 