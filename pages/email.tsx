import Seo from '@/components/common/utils/seo';
import { ICommon } from '@/typings/typings';
import Title from 'components/titleSection';
import type { NextPage } from 'next';

const Email: NextPage<{ seo: ICommon['seo'] }> = () => {

  const seo = {
    metaTitle: 'Upay',
    metaDescription: 'Upay by Lokesh ,Adhithya, sankar',
  };
  return (
    <main>
      <Seo seo={seo} />
      <Title title={'Merchant Pay'} typeOfInput={'email'} />
    </main>
  );
};

export default Email;
