/**
 * 合伙人（社区）
 */
import React from "react";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";
import PartnersData from "./partners.mdx";
import "./index.scss";

export default function Partners() {
  return (
    <Layout>
      <div className="partners-pages">
        <div className="partners-header">
          <h1 className="partners">
            <Translate>GameOne Distributions, Hosted Platforms, and Installers</Translate>
          </h1>
        </div>
        <div className="partners-content">
          <div className="partners-md">
            <PartnersData />
          </div>
        </div>
      </div>
    </Layout>
  );
}
