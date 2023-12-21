export default function Experiences() {
    return (
        <div className="">
            <p className="text-center font-bold py-6">Experiences</p>
            <div className="flex flex-col md:flex-row justify-between">
                <p>Data Scientist @ <span className="font-bold">Prevalent AI</span>, India</p>
                <p className="text-gray-500 text-sm">July 2021 - Sept 2023</p>
            </div>
            <div className="pt-4 text-sm">
                <ul className="list-disc space-y-2 pl-3">
                    <li>Designed and implemented a recommendation engine to provide personalized recommendations, contributing to
                        enhance overall security scores.</li>
                    <li>Utilized NLP to extract consequences from vulnerability descriptions which helped to improve the understanding
                        of potential security risks, aiding in more effective vulnerability management</li>
                    <li>Utilized clustering, fuzzy logic, and Soundex algorithms in Python to normalize similar names represented in different forms into a unified format which helped improve data quality and accuracy.</li>
                </ul>
            </div>
        </div>
    )
}