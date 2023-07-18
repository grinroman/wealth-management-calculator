import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          title: 'Wealth management cost calculator',
          calculator: {
            heading: 'Data for calculate',
            paramas: {
              initial: 'Initial capital',
              investment: 'Investment duration',
              annual: 'Annual gain expectation',
              fees: 'Wealth management & product fees',
              years: 'years',
            },
          },
          outputs:{
            heading:"Impact on wealth management fees on total gains",
            details:"View details",
            models:{
              wmm:"Wealth management model", 
              hpm:"Hourly priced model",
              ncm:"No cost model",
            },
            bars:{
              investment:"Investment",
              totalEarnings:"Total Earnings",
              costs:"Costs",
              compoundInterest:"Opportunity cost"
            }
          }
        },
      },
      ax: {
        translation: {
          title: 'Wealth management cost calculator',
          calculator: {
            heading: 'Data for calculate',
            paramas: {
              initial: 'Initial capital',
              investment: 'Investment duration',
              annual: 'Annual gain expectation',
              fees: 'Wealth management & product fees',
              years: 'years',
            },
          },
          outputs:{
            heading:"Impact on wealth management fees on total gains",
            details:"View details",
            models:{
              wmm:"Wealth management model", 
              hpm:"Hourly priced model",
              ncm:"No cost model",
            },
            bars:{
              investment:"Investment",
              totalEarnings:"Total Earnings",
              costs:"Costs",
              compoundInterest:"Opportunity cost"
            }
          }
        },
      },
    },
  });

export default i18n;
