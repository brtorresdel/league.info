import { NotFoundElement } from './../../components/NotFoundElement/index';
import { useTranslations } from './../../components/Hooks/useTranslations';

export function NotFoundPage() {
    const { t } = useTranslations();

    return(
        <NotFoundElement message={""} />
    )
}