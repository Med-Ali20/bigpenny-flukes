import React from "react";
import DraggableCards from "@/components/DraggableCards";
import ContentPane from "@/components/Content-Pane";
import FaqTabs from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import HeroImage from "@/components/Hero-Image";
import TextBlock from "@/components/Text-Block";
import { v4 as uuidv4 } from "uuid";

async function Components(Component: any) {
  switch (Component.__component) {
    case "section.draggable-cards":
      return (
        <DraggableCards
          key={uuidv4()}
          cards={Component.Card.map((card: any) => {
            return { title: card.Title, link: card.Link, image: card.Image };
          })}
        />
      );

    case "section.content-pane":
      return (
        <ContentPane
          key={uuidv4()}
          title={Component.Title}
          content={Component.Content}
          cta={{ text: Component.CTA?.Text, url: Component.CTA?.Url }}
          image={Component.Image}
          mobileImage={Component.MobileImage}
        />
      );

    case "section.faq-tabs":
      return (
        <FaqTabs key={uuidv4()} title={Component.Title} QA={Component.QA} />
      );

    case "section.gallery":
      return (
        <Gallery
          key={uuidv4()}
          Title={Component.Title}
          Images={Component.Images}
        />
      );

    case "section.hero-image":
      return (
        <HeroImage
          key={uuidv4()}
          Image={Component.Image}
          MobileImage={Component.MobileImage}
          Hyperlink={Component.Hyperlink}
        />
      );

    case "section.text-block":
      return (
        <TextBlock
          key={uuidv4()}
          Content={Component.Content}
          Title={Component.Title}
        />
      );

    default:
      return "";
  }
}

export default Components;
