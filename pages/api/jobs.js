import firestore from '@/lib/firebase';

const jobs = async (req, res) => {
  const latestScrape = await firestore
    .collection('scrapes')
    .orderBy('scrapedAt', 'desc')
    .limit(1)
    .get();

  if (latestScrape.empty) {
    return res.status(200).json({});
  }

  return res.status(200).json(latestScrape.docs[0].data());
};

export default jobs;
