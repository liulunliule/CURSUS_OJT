import "./index.scss"; 
import {ReportHistoryLogo_SideBar} from "../../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ReportHistoryPage() {
    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  return (
    <div className={`ReportHistoryPage ${isShowAll ? "active" : ""}`}>
        <div className="wrapper_ReportHistoryPage__Title">
            <img className="ReportHistoryLogo_ReportHistoryPage" src={ReportHistoryLogo_SideBar} alt="" />
            <h2 className="ReportHistoryPage__Title">Report history</h2>
        </div>
        <div className="wrapper_ReportHistoryPage__TitleSmall">
            <h4 className="ReportHistoryPage__TitleSmall">Thanks for reporting</h4>
        </div>
        <div className="wrapper_ReportHistoryPage__content">
            <p>Any member of the Cursus community can flag content to us that they believe violates our Community Guidelines. When something is flagged, it’s not automatically taken down. Flagged content is reviewed in line with the following guidelines:</p>
            <ul>
                <li>Content that violates our <Link className="Link_ReportHistoryPage">Community Guidelines</Link> is removed from Edututs+.</li>
                <li>Content that may not be appropriate for all younger audiences may be age-restricted.</li>
            </ul>
            <Link className="Link_ReportHistoryPage"><p>Learn more about reporting content on Cursus.</p></Link>
        </div>
        <div className="wrapper_ReportHistoryPage__end">
            <span>You haven't submitted any reports.</span>
        </div>
    </div>
  )
}

export default ReportHistoryPage