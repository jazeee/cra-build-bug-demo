import React from "react";

const selectAll = (ids, selectedRows) => {
	// This is just an example, stripped down to repro the build issue. (Obviously, no longer really useful)
	ids.every(id => selectedRows.includes(id));
};

export const getCheckboxColumn = (selectionProps) => {
	const { data, selectedRows, idKey } = selectionProps;
	const ids = data.map((instance, index) => (idKey ? instance[idKey] : `${index}`));
	return {
		Header: (
			<div
				style={{
					width: "300px",
					height: "100px",
					background: "tomato",
				}}
				onClick={() => {
					try{
						selectAll(ids, selectedRows);
						alert("Works");
					} catch (error) {
						console.error(error);
						alert(error);
					}
				}}
			>
				Click Me (Works for CRA `yarn start` Fails after build.)
			</div>
		),
	};
};
