import { FaAngleRight } from "react-icons/fa";
const notifications = [
  {
    icon: "icon",
    title: "Repayment Made",
    duration: "8 days by undefined",
  },
  {
    icon: "icon",
    title: "Deposit Made",
    duration: "8 days by undefined",
  },
  {
    icon: "icon",
    title: "Deposit made",
    duration: "8 days by undefined",
  },
  {
    icon: "icon",
    title: "Repayment made",
    duration: "8 days by undefined",
  },
  {
    icon: "icon",
    title: "Deposit made",
    duration: "9 days by undefined",
  },
  {
    icon: "icon",
    title: "Deposit made",
    duration: "9 days by undefined",
  },
  {
    icon: "icon",
    title: "Deposit made",
    duration: "9 days by undefined",
  },
  {
    icon: "icon",
    title: "Savings account approved",
    duration: "9 days by undefined",
  },
  {
    icon: "icon",
    title: "New savings account created",
    duration: "9 days by undefined",
  },
  {
    icon: "icon",
    title: "Deposit made",
    duration: "9 days by undefined",
  },
];

const NotificationsData = () => {
  return (
    <>
      {notifications.map((item, index) => (
        <div className="row" key={index}>
          <div className="profile-image">TC</div>
          <div className="col">
            <p>{item.title}</p>
            <p>{item.duration}</p>
          </div>
          <span>
            <FaAngleRight />
          </span>
        </div>
      ))}
    </>
  );
};

export default NotificationsData;
