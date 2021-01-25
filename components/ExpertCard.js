import Image from "next/image";
import styles from "../styles/Home.module.css";

const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;

function ExpertCard({ id, tags }) {
  const allExperts = tags.map((e) => e.experts).flat();
  const expertList = allExperts.filter((e) => e.id === id);
  const relations = expertList.map((e) => e.relation);
  const singleExpert = expertList[0];
  const averageRelation = average(relations) * 100;
  return (
    <div className="flex inline py-3">
      <div className="flex inline pr-3">
        <img src={singleExpert.companyLogo} className="mr-2" width={60} />
        <img src={singleExpert.profilePicture} width={60} />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="font-semibold text-gray-70">{singleExpert.name}</div>
          <div className="text-sm text-gray-500">{singleExpert.title}</div>
        </div>

        <div className={styles.progressBar}>
          <div
            className={`bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 ${styles.progressBarBack}`}
          />
          <div
            className={`bg-gradient-to-r from-purple-700 via-pink-700 to-red-600 ${styles.progressBarFront}`}
            style={{
              width: averageRelation + "%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ExpertCard;
