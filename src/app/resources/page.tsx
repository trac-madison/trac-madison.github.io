import { PropsWithChildren } from "react";
import { IconType } from "react-icons";
import { FaBowlFood, FaKitMedical, FaHouse, FaUserNurse, FaGlobe, FaScaleBalanced, FaPeopleArrows, FaHeart, FaHeartCirclePlus, FaShuffle, FaSeedling } from "react-icons/fa6";

interface ListItemProps {
  title: string
  href?: string
}

function ListItem(props: PropsWithChildren<ListItemProps>) {
  return (
    <li>
      <a href={props.href} className={`font-bold ${props.href && "text-emerald-800"}`}>{props.title}</a>
      <ul className="ps-4 mt-2 space-y-1 list-none list-inside">
        <li>{props.children}</li>
      </ul>
    </li>
  )
}

interface ResourceProps {
  title: string
  icon: IconType
}

function ResourceCard(props: PropsWithChildren<ResourceProps>) {
  const {title, children, icon} = props;
  const Icon = icon;
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
            <Icon />
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium">{title}</h2>
        </div>
        <div className="flex-grow">
          <ul className="mad-w-md space-y-4 list-disc list-inside">
            {children}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default function Resources() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Community Resources</h1>
        </div>
        <h2 className="sm:text-3xl text-xl mb-4 font-medium title-font text-gray-900">Food + Healthcare</h2>
        <div className="flex flex-wrap -m-4">
          <ResourceCard title="Food" icon={FaBowlFood}>
            <ListItem href="https://cmcmadison.org" title="Catholic Multicultural Center">
              Food and personal supply pantry on the South Side.
            </ListItem>
            <ListItem href="https://hffadane.org" title="Healthy Food For All">
              Collects local surplus produce from area farms and prepared food from retail operations,
              and redistributes directly to low income neighborhoods.
            </ListItem>
            <ListItem href="https://www.publichealthmdc.com/documents/food_resource_guide_eng.pdf" title="Madison/Dane County Food Resource Guide">
              List of food resources maintained by Dane County Public Health.
            </ListItem>
            <ListItem href="https://leopold.madison.k12.wi.us/families/pop-up-mobile-food-pantries" title="MMSD Pop-up Mobile Food Pantries">
              School-based food pantries in partnership with Second Harvest Foodbank
            </ListItem>
            <ListItem href="https://www.veracourt.org/food-pantry" title="Vera Court Neighborhood Center Food Pantry">
              Pantry on the North Side, third Wednesdays of every Month
            </ListItem>
          </ResourceCard>
          <ResourceCard title="Healthcare" icon={FaKitMedical}>
            <ListItem href="https://linktr.ee/cleanair608" title="Clean Air 608">
              Air Purifiers and CO2 monitors that are free to use for the community.
              Must reserve equipment.
            </ListItem>
            <ListItem href="https://maskbloc608.wixsite.com/maskbloc608" title="Mask Bloc 608">
              Free KN95 and N95 masks for the community upon request.
            </ListItem>
            <ListItem href="https://www.communitypharmacy.coop/" title="Community Pharmacy">
              Worker cooperative providing customers with full range of affordable prescriptions,
              supplements, toiletries, and more.
            </ListItem>
            <ListItem href="https://www.madisondeathcollective.org" title="Madison Death Collective">
              Community resource of practitioners who offer free and sliding scale therapies and events.
            </ListItem>
          </ResourceCard>
          <ResourceCard title="Healthcare+" icon={FaUserNurse}>
            <ListItem href="https://www.madisonstreetmedicine.org/" title="Madison Street Medicine">
              Provides healthcare to those experiencing housing insecurity.
            </ListItem>
            <ListItem href="https://www.transfolx.com/" title="Trans Medical Mutual Aid">
              Assists individuals through gender affirming care through providing classes on 
              wound care and recovery, arranging medical rides, and scheduling meal delivery.
            </ListItem>
            <ListItem href="https://www.wiabortionfund.org/" title="Wisconsin Abortion Fund">
              Provides financial, logistical, and emotional support to those seeking abortion care.
            </ListItem>
          </ResourceCard>
        </div>
        <h2 className="sm:text-3xl text-xl mb-4 mt-4 font-medium title-font text-gray-900">Housing + Legal</h2>
        <div className="flex flex-wrap -m-4">
          <ResourceCard title="Housing" icon={FaHouse}>
            <ListItem href="http://www.madisontenantpower.org" title="Madison Tenant Power">
              Tenants Union of self-organized individuals fighting for a more fair balance of power 
              between tenants and landlords. 
            </ListItem>
            <ListItem href="https://www.tenantresourcecenter.org/" title="Tenant Resource Center">
              Provides a variety of housing resources.
            </ListItem>
          </ResourceCard>
          <ResourceCard title="Immigration" icon={FaGlobe}>
            <ListItem href="http://www.micentro.org" title="Centro Dane County">
              Immigration services, general support for latine community.
            </ListItem>
            <ListItem href="https://www.cilcmadison.org/" title="Community Immigration Law Center">
               Various resources related to immigration and deportation legal help and education.
            </ListItem>
          </ResourceCard>
          <ResourceCard title="Legal" icon={FaScaleBalanced}>
            <ListItem href="https://www.translawhelp.com/" title="Trans Law Help Wisconsin">
              Resources for name changes and gender marker changes.
            </ListItem>
            <ListItem href="http://www.smallaxe.me" title="Small Axe Cooperative">
              Provides legal education and representation in the Madison area. Offers name change clinics and more.
            </ListItem>
          </ResourceCard>
        </div>
        <h2 className="sm:text-3xl text-xl mb-4 mt-4 font-medium title-font text-gray-900">Social Services + Outreach</h2>
        <div className="flex flex-wrap -m-4">
          <ResourceCard title="Social Support" icon={FaPeopleArrows}>
            <ListItem href="https://www.catalystforchangeinc.org/" title="Catalysts for Change">
              Support for people experiencing housing instability.
            </ListItem>
            <ListItem href="https://danecountyhumanservices.org/Disability-and-Aging/Transportation/Adults-Over-60-and-Adults-with-a-Disability" title="Dane County Human Services">
              Transportation for disabled and senior persons.
            </ListItem>
            <ListItem href="https://fssf.org" title="Friends of State Street">
              Helping our neighbors struggling with homelessness.
            </ListItem>
            <ListItem href="http://www.thercc.org" title="RCC Sexual Violence Resource Center">
              Provides services to survivors and their support people of all forms of sexual violence.
            </ListItem>
            <ListItem href="https://www.ywcamadison.org/what-we-do" title="YWCA">
              Housing, and some job transportation support.
            </ListItem>
          </ResourceCard>
          <ResourceCard title="Social Outreach" icon={FaHeart}>
            <ListItem href="https://freedom-inc.org/" title="Freedom, Inc.">
              Engages low to no income communities of color in Dane County to achieve 
              social justice through direct services, leadership development, and 
              community organizing.
            </ListItem>
            <ListItem href="https://forge-forward.org/" title="FORGE (Milwaukee)">
              Trans-specific resources for healthcare organizations and individuals who have experienced abuse or violence.
            </ListItem>
            <ListItem href="https://gsafewi.org/" title="GSafe">
              Dedicated to increasing the capacity of LGBTQ youth and students, education staff through training, and families to 
              create school environments where LGBTQ youth students thrive.
            </ListItem>
            <ListItem title="Madison Area Transgender Association">
              Program of Outreach LGBTQ+ Community Center offering events and community meals. Can be found on Facebook.
            </ListItem>
          </ResourceCard>
          <ResourceCard title="Social Outreach+" icon={FaHeartCirclePlus}>
            <ListItem href="https://www.outreachmadisonlgbt.org/" title="OutReach Madison">
              Numerous local resources for social support - Center located at 2701 International Ln, #101.
            </ListItem>
            <ListItem href="https://socialjusticecenter.org" title="Social Justice Center">
              Collaborative workspace that is home to several community organizations. Strives to create an inclusive, 
              accessible place where community members can access key resources and essentials.
            </ListItem>
            <ListItem href="https://www.facebook.com/groups/814279371987057/" title="Madison Muslim Oasis">
              Group of Madison Muslims and friends looking to create a welcoming and nurturing space to think, grow, and connect with others along their shared values. 
              Open to anyone who identifies as Muslim in whatever form that takes as well those interested in learning more about Islam. 
              Frequently do work in the Madison community including handing out meals to those in need.
            </ListItem>
          </ResourceCard>
        </div>
        <h2 className="sm:text-3xl text-xl mb-4 mt-4 font-medium title-font text-gray-900">Additional Resources</h2>
        <div className="flex flex-wrap -m-4">
          <ResourceCard title="Miscellaneous" icon={FaShuffle}>
            <ListItem href="https://www.facebook.com/groups/930631423985133/" title="Darn Queers!">
              Learn to sew, work on fiber crafts in community.
            </ListItem>
            <ListItem href="https://roomofonesown.com" title="A Room of One's Own bookstore">
              Trans and queer owned bookstore offering regular community events such as open mic nights 
              and readings. 
            </ListItem>
          </ResourceCard>
          <ResourceCard title="Suicide + Mental Health Lifelines" icon={FaSeedling}>
            <ListItem title="Call Blackline: 1-800-604-5841">
              Centers BIPOC, LGBTQ+ Black femme lens
            </ListItem>
            <ListItem title="Trans Lifeline: 1-877-565-8860">
              Run by & for Trans People. English & Espanol
            </ListItem>
            <ListItem title="Wildflower Alliance: 1-888-407-4515">
              Trained peer supporters
            </ListItem>
            <ListItem title="Thrive Lifeline: 1-313-662-8209">
              24/7: Trans-led and operated
            </ListItem>
            <ListItem title="LGBT National Help Center: 1-888-843-8209" />
            <ListItem title="Strong Hearts Native Helpline: 1-844-762-8483">
              24/7: Centers Native americans experiencing partner or sexual violence
            </ListItem>
          </ResourceCard>
        </div>
      </div>
    </section>
  )
}
