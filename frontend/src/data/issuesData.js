import entanglementPicture from "../assets/images/entanglement.jpg";
import eatPlasticPicture from "../assets/images/animal_eat_plastic.webp";
import plasticInOceanPicture from "../assets/images/plastic_in_ocean.webp";
import deadCoralsPicture from "../assets/images/dead_corals.webp";
import seaBirdPicture from "../assets/images/seabird_plastic.webp";

const issues = [
  {
    name: "Entanglement of Marine Life",
    description:
      "Discarded fishing nets, lines, and other debris pose a serious threat to marine life by entangling animals such as turtles, seals, dolphins, and seabirds, leading to injury, suffocation, and death.",
    image: entanglementPicture,
  },
  {
    name: "Ingestion of Plastic by Marine Animals",
    description:
      "Marine animals often mistake plastic debris for food, leading to ingestion. This can cause internal injuries, digestive blockages, and death. Species ranging from small fish to whales are affected by this issue.",
    image: eatPlasticPicture,
  },
  {
    name: "Plastic Pollution Threat to Seabirds",
    description:
      "Seabirds are particularly vulnerable to the impacts of plastic pollution. They may ingest plastic debris or become entangled in it, leading to injury, reduced reproductive success, and population decline.",
    image: seaBirdPicture,
  },
  {
    name: "Plastic Pollution on Coral Reefs",
    description:
      "Plastic debris can smother and damage coral reefs, disrupting their growth and functioning. Coral reefs are vital ecosystems that support a diverse range of marine life, and plastic pollution threatens their survival.",
    image: deadCoralsPicture,
  },
  {
    name: "Plastic Pollution in Ocean Environments",
    description:
      "Plastic waste has been found even in the deepest parts of the ocean, contaminating remote and pristine environments. This pollution harms deep-sea organisms, many of which are still poorly understood.",
    image: plasticInOceanPicture,
  },
];

export default issues;
