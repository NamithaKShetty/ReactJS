import React from "react";
import styled from "styled-components";

const ServicesContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => (theme === "light" ? "#f9f9f9" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  font-size: 18px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => (theme === "light" ? "#ddd" : "#555")};
`;

const Services = () => {
  return (
    <ServicesContainer>
      <h2>Our Services</h2>
      <ServiceList>
        <ServiceItem>✔ Web Development</ServiceItem>
        <ServiceItem>✔ Mobile App Development</ServiceItem>
        <ServiceItem>✔ UI/UX Design</ServiceItem>
        <ServiceItem>✔ SEO Optimization</ServiceItem>
      </ServiceList>
    </ServicesContainer>
  );
};

export default Services;
