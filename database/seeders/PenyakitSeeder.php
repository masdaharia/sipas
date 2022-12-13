<?php

namespace Database\Seeders;

use App\Models\Disease;
use Illuminate\Database\Seeder;

class PenyakitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $penyakit = [
            [
                'kode_penyakit' => 'P01',
                'nama_penyakit' => 'Whitehead',
                'tingkat_keparahan' => 'Ringan',
                'keterangan' => 'Whitehead/Komedo Putih : Saat pori-pori kulit mengalami sumbatan, baik karena sel kulit mati atau sebum, komedo putih pun terbentuk. Namun komedo putih biasanya ada di bawah permukaan kulit dengan bagian atas pori menutup tapi tetap nampak, jadi seperti ada benjolan kecil menonjol',
                // 'keterangan' => 'Whitehead : Penyumbatan pori-pori pada wajah akibat bakteri, sel kulit mati, namun pori-pori tersebut belum terbuka jadi belum tercampur dengan udara diluar dan warnanya masih putih.',
                'saran' => 'Untuk penanganan whitehead yaitu dengan melakukan eksfoliasi atau menggunakan produk wajah yang mengandung benzoic peroxide, lakukan selama 2x atau 1x seminggu.',
                'gambar' => 'whitehead.jpg'
            ],
            [
                'kode_penyakit' => 'P02',
                'nama_penyakit' => 'Blackhead',
                'tingkat_keparahan' => 'Ringan',
                'keterangan' => 'Blackhead/Komedo Hitam : Terjadi di saat pori-pori tersumbat oleh produksi minyak berlebih/sebum serta sel kulit mati. Hanya saja, bagian atas pori terbuka sebagian sehingga warna hitamnya nampak pada permukaan kulit dan disebut dengan komedo hitam.',
                // 'keterangan' => 'Blackhead : disebabkan karena pori-pori tersumbat oleh kulit mati, bakteri dan penyumbatan tersebut mengalami oksidasi karena terkena udara diluar sehingga menjadi warna lebih gelap.',
                'saran' => 'Untuk penanganan blackhead yaitu dengan menggunakan scrub bisa dalam bentuk facial wash/masker, lakukan selama 2x atau 1x seminggu.',
                'gambar' => 'blackhead.jpg'
            ],
            [
                'kode_penyakit' => 'P03',
                'nama_penyakit' => 'Papula',
                'tingkat_keparahan' => 'Sedang',
                'keterangan' => 'Papula : Peradangan dapat membuat dinding sekitar pori rusak sehingga hal ini memicu pembentukan papula. Pori-pori pun tersumbat dan menjadi keras namun akan lembut saat disentuh. Pada jerawat papula, kulit sekeliling pori warnanya adalah merah muda.',
                // 'keterangan' => 'Papula : berasal dari komedo yang tidak segera diobati, dan terinfeksi oleh bakteri, jadi tubuh melakukan perlawanan dengan meradang atau membuat kulit menjadi bentol-bentol.',
                'saran' => 'Untuk penanganan papula yaitu dengan menggunakan skincare yang mengandung salicylic acid / niacinamide.',
                'gambar' => 'papula.jpg'
            ],
            [
                'kode_penyakit' => 'P04',
                'nama_penyakit' => 'Pustula',
                'tingkat_keparahan' => 'Sedang',
                'keterangan' => 'Pustula : Ketika dinding sekitar pori kulit rusak, pembentukan pustula terjadi di mana benjolan ini nampak keluar dari kulit dengan warnanya yang kemerahan. Di pucuk atau puncak dari benjolan akan kelihatan warnanya putih atau kuning di mana itu sebenarnya adalah nanah.',
                // 'keterangan' => 'Pustula : berasal dari komedo yang tidak segera diobati, dan terinfeksi oleh bakteri sehingga tubuh melakukan perlawanan dengan membuat kulit menjadi merah-merah dan memiliki nanah ditengah benjolan.',
                'saran' => 'Untuk penanganan pustula yaitu dengan menggunakan skincare yang mengandung salicylic acid / sulfur. Hindari makanan yang tinggi lemak dan yang manis-manis.',
                'gambar' => 'pustula.jpg'
            ],
            [
                'kode_penyakit' => 'P05',
                'nama_penyakit' => 'Nodula',
                'tingkat_keparahan' => 'Berat',
                'keterangan' => 'Nodula : Pori-pori mengalami sumbatan yang disertai bengkak tanda iritasi. Hanya saja, keberadaan nodula ada di bawah kulit dan jauh lebih dalam.',
                // 'keterangan' => 'Nodula : Pori-pori tersumbat dilapisi kulit paling bawah dan bakteri sudah masuk kedalam akibat dari nodul yang bakterinya sudah menyebar bisa menimbulkan bekas luka.',
                'saran' => 'Untuk penanganan nodul yaitu dengan konsultasi kedokter karena perawatannya butuh yang intensif sebab jenis ini sudah meradang diluar dan juga dipermukaan kulit jadi membutuhkan perawatan yang ekstra, tetapi bisa juga menggunakan perawatan-perawatan wajah atau skincare-skincare yang mengandung salicylic acid, niacinamide.',
                'gambar' => 'nodula.jpg'
            ],

            [
                'kode_penyakit' => 'P06',
                'nama_penyakit' => 'Kista',
                'tingkat_keparahan' => 'Berat',
                'keterangan' => 'Kista : Pori-pori yang mengalami sumbatan oleh sel kulit mati, sebum maupun bakteri dapat menyebabkan jerawat kistik. Dibandingkan nodula, sumbatan terjadi lebih jauh di bawah permukaan kulit. Hal ini ditandai dengan benjolan putih atau merah yang cukup besar dan akan sangat sakit ketika disentuh.',
                // 'keterangan' => 'Kista : terbentuk dari penumpukan minya dan sel kulit mati pada jaringan kulit yang paling dalam, bahkan jauh didalam folikel rambut. peradangan yang terjadi pada jaringan kulit dalam ini menyebabkan terbentuknya benjolan besar.',
                'saran' => 'Kista : Segera bicara dengan dokter spesialis kulit. Penggunaan obat jerawat yang dijual bebas biasanya kurang ampuh dalam mengatasi penyakit ini.',
                'gambar' => 'kista.jpg'
            ]
        ];

        Disease::insert($penyakit);
    }
}
