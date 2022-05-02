// @flow
import React from "react";
import { Trans } from "react-i18next";
import type { AccountLike } from "@ledgerhq/live-common/lib/types";

import {
  OpDetailsTitle,
  OpDetailsData,
  OpDetailsSection,
} from "~/renderer/drawers/OperationDetails/styledComponents";
import Ellipsis from "~/renderer/components/Ellipsis";

type OperationDetailsExtraProps = {
  extra: { [key: string]: string },
  type: string,
  account: ?AccountLike,
};

const OperationDetailsExtra = ({ extra }: OperationDetailsExtraProps) => {
  return Object.entries(extra)
    .filter(([key]) => !["id"].includes(key))
    .map(([key, value]) => (
      <OpDetailsSection key={key}>
        <OpDetailsTitle>
          <Trans i18nKey={`operationDetails.extra.${key}`} defaults={key} />
        </OpDetailsTitle>
        <OpDetailsData>
          <Ellipsis>{value}</Ellipsis>
        </OpDetailsData>
      </OpDetailsSection>
    ));
};

export default {
  OperationDetailsExtra,
};
