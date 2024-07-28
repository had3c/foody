import { useTranslation } from "react-i18next";

export const useFaqData = () => {
    const { t } = useTranslation();

    return [
        {
            question: t("How to contact with Customer Service?"),
            answer: t("Question1")
        },
        {
            question: t("App installation failed, how to update system information?"),
            answer: t("Question2")

        },
        {
            question: t("Website reponse taking time, how to improve?"),
            answer: t("Question3")

        },
        {
            question: t("How do I create a account?"),
            answer: t("Question4")

        }
    ];
};
