import "./index.scss";
import {
  DevelopmentLogo_AllCategoriesPage,
  BusinessLogo_AllCategoriesPage,
  Finance_AccountingLogo_AllCategoriesPage,
  IT_SoftwareLogo_AllCategoriesPage,
  OfficeProductivityLogo_AllCategoriesPage,
  PersonalDevelopmentLogo_AllCategoriesPage,
  DesignLogo_AllCategoriesPage,
  MarketingLogo_AllCategoriesPage,
  LifestyleLogo_AllCategoriesPage,
  PhotographyLogo_AllCategoriesPage,
  Health_FitnessLogo_AllCategoriesPage,
  MusicLogo_AllCategoriesPage,
  TeachingAcademicsLogo_AllCategoriesPage,
} from "../../assets";
import { useSelector } from "react-redux";

function DetailCategoryPage() {

    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

  return (
    <div className={`DetailCategoryPage ${isShowAll ? "active" : ""}`}>
      <h1 className="DetailCategoryPage__Title">Explore Our Categories</h1>
      <div className="DetailCategoryPage_Contents__Field_Title">
        <img
          className="Logo_DetailCategoryPage"
          src={DevelopmentLogo_AllCategoriesPage}
          alt=""
        />
        <span className="Logo_DetailCategoryPage_Title">Development</span>
      </div>
      <div className="DetailCategoryPage_Contents__Field_Title">
        <img
          className="Logo_DetailCategoryPage"
          src={BusinessLogo_AllCategoriesPage}
          alt=""
        />
        <span className="Logo_DetailCategoryPage_Title">Business</span>
      </div>
      <div className="DetailCategoryPage_Contents__Field_Title">
        <img
          className="Logo_DetailCategoryPage"
          src={Finance_AccountingLogo_AllCategoriesPage}
          alt=""
        />
        <span className="Logo_DetailCategoryPage_Title">
          Finance Accounting
        </span>
      </div>
      <div className="DetailCategoryPage_Contents__Field_Title">
        <img
          className="Logo_DetailCategoryPage"
          src={IT_SoftwareLogo_AllCategoriesPage}
          alt=""
        />
        <span className="Logo_DetailCategoryPage_Title">IT Software</span>
      </div>
      <div className="DetailCategoryPage_Contents__Field_Title">
        <img
          className="Logo_DetailCategoryPage"
          src={OfficeProductivityLogo_AllCategoriesPage}
          alt=""
        />
        <span className="Logo_DetailCategoryPage_Title">
          Office Productivity
        </span>
      </div>
      <div className="DetailCategoryPage_Contents__Field_Title">
        <img
          className="Logo_DetailCategoryPage"
          src={PersonalDevelopmentLogo_AllCategoriesPage}
          alt=""
        />
        <span className="Logo_DetailCategoryPage_Title">
          Personal Development
        </span>
      </div>
      <div className="DetailCategoryPage_Contents__Field_Title">
        <img
          className="Logo_DetailCategoryPage"
          src={DesignLogo_AllCategoriesPage}
          alt=""
        />
        <span className="Logo_DetailCategoryPage_Title">Design</span>
      </div>
      <div className="DetailCategoryPage_Contents__Field_Title">
        <img
          className="Logo_DetailCategoryPage"
          src={MarketingLogo_AllCategoriesPage}
          alt=""
        />
        <span className="Logo_DetailCategoryPage_Title">Marketing</span>
      </div>
      <div className="DetailCategoryPage_Contents__Field_Title">
        <img
          className="Logo_DetailCategoryPage"
          src={LifestyleLogo_AllCategoriesPage}
          alt=""
        />
        <span className="Logo_DetailCategoryPage_Title">Lifestyle</span>
      </div>
      <div className="DetailCategoryPage_Contents__Field_Title">
        <img
          className="Logo_DetailCategoryPage"
          src={PhotographyLogo_AllCategoriesPage}
          alt=""
        />
        <span className="Logo_DetailCategoryPage_Title">Photography</span>
      </div>
      <div className="DetailCategoryPage_Contents__Field_Title">
        <img
          className="Logo_DetailCategoryPage"
          src={Health_FitnessLogo_AllCategoriesPage}
          alt=""
        />
        <span className="Logo_DetailCategoryPage_Title">Health Fitness</span>
      </div>
      <div className="DetailCategoryPage_Contents__Field_Title">
        <img
          className="Logo_DetailCategoryPage"
          src={MusicLogo_AllCategoriesPage}
          alt=""
        />
        <span className="Logo_DetailCategoryPage_Title">Music</span>
      </div>
      <div className="DetailCategoryPage_Contents__Field_Title">
        <img
          className="Logo_DetailCategoryPage"
          src={TeachingAcademicsLogo_AllCategoriesPage}
          alt=""
        />
        <span className="Logo_DetailCategoryPage_Title">
          Teaching Academics
        </span>
      </div>
      <div className="DetailCategoryPage_Contents">
        <h3 className="DetailCategoryPage_H3">
          Importance of a Categories Page
        </h3>
        <p className="DetailCategoryPage_P">
          A categories page serves as a central hub for content organization on
          a website. It allows users to browse through different topics, themes,
          or product types systematically. This is particularly essential for
          websites with extensive content, such as blogs, e-commerce sites, and
          news portals.
        </p>
      </div>
    </div>
  );
}

export default DetailCategoryPage;
