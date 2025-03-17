import { CallToAction } from "@/app/components/callToAction";
import React from "react";
import Pricing from "./_components/pricing";
import { Titles } from "@/app/components/Titles";
import AIAgentsTable from "./_components/pricingFeautures";
import FAQComponent from "./_components/faqPrice"

const PricingPage = () => {
  return (
    <>
      <section className="xl:w-8/12 pt-28">
        <div>
          <Pricing />
        </div>
        
        <div className="w-10/12 m-auto py-4">
          <AIAgentsTable agentsData={[
             {
              "feature": "Chatbot Creation",
              "description": "Create and manage chatbots with predefined responses, custom workflows, and integrations.",
              "addOns": ["1 Chatbot", "5 Chatbots", "Unlimited Chatbots"]
            },
            {
              "feature": "Analytics",
              "description": "Access detailed usage statistics and performance metrics for your chatbots.",
              "addOns": ["Basic Analytics", "Advanced Analytics", "Real-Time Analytics"]
            },
            {
              "feature": "API Integration",
              "description": "Integrate your chatbots into external platforms using API keys.",
              "addOns": ["❌", "✅", "✅"]
            },
            {
              "feature": "Custom Branding",
              "description": "Apply custom branding to your chatbots by adding logos, colors, and personalized messages.",
              "addOns": ["❌", "❌", "✅"]
            },
            {
              "feature": "Support",
              "description": "Receive assistance and resolve issues via multiple support channels.",
              "addOns": ["Email Support", "Priority Email Support", "24/7 Priority Support"]
            },
            {
              "feature": "Newsletter Subscription",
              "description": "Subscribe to newsletters for updates, promotions, and new features.",
              "addOns": ["✅", "✅", "✅"]
            },
            {
              "feature": "Multi-Platform Deployment",
              "description": "Deploy your chatbots across multiple platforms, including websites, social media, and messaging apps.",
              "addOns": ["❌", "✅", "✅"]
            },
            {
              "feature": "Dedicated Account Manager",
              "description": "Gain access to a dedicated account manager for personalized assistance.",
              "addOns": ["❌", "❌", "✅"]
            },
            {
              "feature": "Advanced NLP Models",
              "description": "Leverage advanced Natural Language Processing (NLP) models for improved chatbot accuracy and understanding.",
              "addOns": ["❌", "Basic NLP", "Advanced NLP"]
            },
            {
              "feature": "Custom Workflows",
              "description": "Design custom workflows and decision trees for your chatbots.",
              "addOns": ["❌", "Basic Workflows", "Advanced Workflows"]
            },
            {
              "feature": "User Management",
              "description": "Manage user accounts and permissions within your organization.",
              "addOns": ["Single User", "Up to 5 Users", "Unlimited Users"]
            },
            {
              "feature": "Data Export",
              "description": "Export chatbot interaction data for analysis or compliance purposes.",
              "addOns": ["❌", "Monthly Exports", "Daily Exports"]
            },
            {
              "feature": "Live Chat Handoff",
              "description": "Enable seamless handoff from chatbots to live agents when complex issues arise.",
              "addOns": ["❌", "Basic Handoff", "Advanced Handoff"]
            },
            {
              "feature": "Security Features",
              "description": "Enhance security with features like two-factor authentication (2FA), IP whitelisting, and data encryption.",
              "addOns": ["Basic Security", "Advanced Security", "Enterprise Security"]
            },
            {
              "feature": "Voice Integration",
              "description": "Integrate voice-based interactions into your chatbots.",
              "addOns": ["❌", "Basic Voice", "Advanced Voice"]
            }
          ]} />
        </div>

        <div className="w-10/12 m-auto py-4">
          <FAQComponent />
        </div>
        
        <div className="w-10/12 m-auto py-4">
          <CallToAction />
        </div>
      </section>
    </>
  );
};

export default PricingPage;
