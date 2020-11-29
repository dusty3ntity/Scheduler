import React, { createContext, useContext, useEffect, useState } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";

import "moment/locale/uk";

import { Locale } from "../models/locales";

interface LocaleContextValue {
	locale: Locale;
	setLocale: React.Dispatch<React.SetStateAction<Locale>>;
}

export const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export const useLocaleContext = (): LocaleContextValue => {
	const c = useContext(LocaleContext);

	if (!c) {
		throw new Error("useLocaleContext must be inside LocaleProvider");
	}

	return c;
};

export const LocaleProvider: React.FC = ({ children }): JSX.Element => {
	const [locale, setLocale] = useState<Locale>(Locale.EN);

	const { i18n } = useTranslation();
	useEffect(() => {
		const locale = i18n.language as Locale;
		moment.locale(locale);
		setLocale(locale);
	}, [i18n.language]);

	const value = { locale, setLocale };

	return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};
