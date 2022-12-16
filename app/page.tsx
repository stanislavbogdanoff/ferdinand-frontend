import { Suspense } from "react";
import Hero from "../_components/hero";
import Timeless from "../_components/timeless";
import Fortress from "../_components/fortress";
import Feautures from "../_components/features";
import Form from "../_components/form";
import Center from "../_components/center";
import Granite from "../_components/granite";
import Best from "../_components/best";
import Gene from "../_components/gene";
import Greenbelt from "../_components/greenbelt";
import Techs from "../_components/techs";
import Standarts from "../_components/standarts";
import Natural from "../_components/natural";
import Plans from "../_components/plans";
import Gallery from "../_components/gallery";
import MoreForm from "../_components/moreform";

import "../styles/globals.scss";
import PageWrapper from "../_components/pagewrapper";

export default function MainPage() {
  return (
    <PageWrapper>
      <div className="main_page">
        <Hero />
        <Timeless />
        <Fortress />
        <Feautures />
        <Form />
        <Granite />
        <Center />
        <Best />
        <Gene />
        <Greenbelt />
        <Techs />
        <Standarts />
        <Natural />
        <Plans />
        <Gallery />
        <MoreForm />
      </div>
    </PageWrapper>
  );
}
