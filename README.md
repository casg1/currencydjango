# CurrencyDjango

**A Django-based web application that delivers up-to-date currency conversion, real-time exchange rates, and historical rate tracking. It features a modern responsive interface, API integration for accuracy, and rich data visualization for users.**

## Table of Contents

- Overview
- Features
- Technologies Used
- Project Structure
- Usage
- API Endpoints
- Contributing
- License

## Overview

CurrencyDjango empowers users to convert currencies using the latest exchange rates. It tracks historical rates and provides an interactive experience through a web-based interface. Real-time data is fetched directly from external APIs, ensuring accuracy and reliability for all conversions.

## Features

- **Live Currency Conversion**  
  Instantly convert between global currencies with up-to-date rates.
- **Historical Rate Tracking**  
  View historical exchange rates and visualize changes over time.
- **Responsive UI**  
  Modern frontend designed for desktop and mobile.
- **API-Driven Data**  
  Fetches fresh rates from an exchange-rate API.
- **Data Visualization**  
  Interactive graphs with Chart.js for trends and history.
- **Django REST API**  
  Endpoints for conversion and currency lists.

## Technologies Used

- **Backend:** Django (Python)
- **Frontend:** HTML, CSS, JavaScript
- **APIs:** ExchangeRate API (or similar)
- **Visualization:** Chart.js
- **Other:** Django REST Framework

## Project Structure

```
.
├── .idea/                  # IDE settings
├── curruncy/               # Main Django app
│   ├── migrations/         # Database migrations
│   ├── static/             # Static files (JS/CSS)
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── forms.py
│   ├── models.py           # Currency & UpdateLog models
│   ├── serializers.py      # DRF serializers
│   ├── tests.py
│   ├── urls.py             # API endpoints
│   └── views.py            # API logic
├── static/js/              # Frontend JS files (e.g. script2.js)
├── testdjango/             # Additional Django configs
├── manage.py               # Django management script
└── README.md
```

## Usage

1. **Clone Repository**
    ```bash
    git clone https://github.com/casg1/currencydjango.git
    cd currencydjango
    ```
2. **Install Dependencies**
    - Set up a Python environment (e.g. with Anaconda or venv)
    - Install Django and DRF:
      ```bash
      pip install django djangorestframework requests chart.js
      ```
    - Configure settings as needed.
3. **Run Migrations**
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```
4. **Start Development Server**
    ```bash
    python manage.py runserver
    ```
5. **Access the Web App**
    - Open `http://127.0.0.1:8000/` in your browser.

## API Endpoints

- **Currency List:**  
  `GET /currencies/`  
  Returns a list of available currency codes and rates.

- **Convert Currency:**  
  `GET /convert/<from_currency>/<to_currency>/<amount>/`  
  Converts the specified amount from one currency to another using the latest rates.

## Contributing

Contributions welcome! Open an issue or submit a pull request for new features, bug fixes, or improvements.

## License

This project is licensed under the MIT License.

**For questions or feedback, open an issue or contact the repository owner.**
