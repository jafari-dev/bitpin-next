import { EmptyBox } from "_/images";
import { memo } from "react";

function Empty(): React.ReactElement {
  return (
    <div className="empty rounded-3 py-3 text-center">
      <EmptyBox className="mb-5" />
      <h4 className="mb-0">اطلاعاتی جهت نمایش وجود ندارد ...</h4>
    </div>
  );
}

export default memo(Empty);
