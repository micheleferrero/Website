---
title: "Coordinating CCL Re-Optimization and WAN Reconfiguration for Cross-Regional AI Acceleration"
authors: "Jiaheng Xiong, Hao Zhou, Qiaolun Zhang, Paolo Medagliani, Michele Ferrero, Xiaomin Liu, Meng Lian, Nicola Di Cicco, Mëmëdhe Ibrahimi, Francesco Musumeci, Massimo Tornatore"
type: paper
label: Conference
year: 2026
date: 2026-05-18
venue: "IEEE/IFIP Network Operations and Management Symposium (NOMS '26), Rome, Italy, 18–22 May 2026"
abstract: |
  Many emerging Artificial Intelligence (AI) workloads rely on cross-regional
  distributed training, where Collective Communication Libraries (CCLs), such as
  AllGather, AllReduce, and AlltoAll, operate across multiple datacenters (DCs)
  interconnected by wide-area networks (WANs). However, while WAN routing can adapt
  to traffic dynamics at sub-second to second timescales, CCL logical-topology
  re-optimization is typically applied far more slowly, often every tens or hundreds
  of collectives. Due to this intrinsic timescale mismatch, CCL performance is
  affected by bandwidth variability in the WAN, motivating us to investigate the
  individual influence on performance of WAN reconfiguration and CCL reoptimization.
  Using a simulated inter-DC environment, we observe that combined WAN reconfiguration
  and CCL re-optimization can significantly reduce AllGather completion time compared
  to applying only WAN or only CCL adjustments, highlighting the tight coupling
  between CCL behavior and WAN dynamics.
links:
  - label: Paper
    url: https://doi.org/10.1109/NOMS69089.2026.11668204
bibtex: |
  @inproceedings{xiong2026coordinating,
    title     = {Coordinating CCL Re-Optimization and WAN Reconfiguration
                 for Cross-Regional AI Acceleration},
    author    = {Xiong, Jiaheng and Zhou, Hao and Zhang, Qiaolun and Medagliani, Paolo
                 and Ferrero, Michele and Liu, Xiaomin and Lian, Meng and Di Cicco, Nicola
                 and Ibrahimi, M{\"e}m{\"e}dhe and Musumeci, Francesco and Tornatore, Massimo},
    booktitle = {IEEE/IFIP Network Operations and Management Symposium (NOMS)},
    address   = {Rome, Italy},
    year      = {2026},
    month     = may,
    publisher = {IEEE},
    doi       = {10.1109/NOMS69089.2026.11668204}
  }
---
